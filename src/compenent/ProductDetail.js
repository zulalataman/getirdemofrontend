import React, {useEffect, useState} from 'react';
import {Button, Card, Layout, theme} from 'antd';
import {useParams} from 'react-router-dom';
import '../Style.css';

const {Content} = Layout;
const ProductDetail = () => {
    const {id} = useParams(); // URL'den ID'yi al

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/getProduct/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Ürün bulunamadı');
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ürün detayları alınamadı:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div style={{textAlign: 'center', marginTop: '20px'}}>Yükleniyor...</div>;
    }

    if (!product) {
        return <div style={{textAlign: 'center', marginTop: '20px'}}>Ürün bulunamadı.</div>;
    }

    return (
        <Layout>
            <br/>
            <br/>
            <Content
                style={{
                    display: 'flex',
                    alignItems: 'start', // Öğeleri dikey olarak ortala
                    background: colorBgContainer,
                    minHeight: 380,
                    padding: '24px', // çerçeve ile arasındaki boşluk
                    borderRadius: borderRadiusLG,
                    width: '1200px', // Content'in maksimum genişliği
                    margin: 'auto' // İçeriği yatay olarak ortala
                }}
            >
                <div> {/* Resmin olduğu kısım */}
                    <img src={product.img} alt={product.name}
                         style={{
                             width: '100%',
                             height: 'auto',
                             maxWidth: '400px',
                             border: '2px solid whitesmoke',
                             borderRadius: '10px'
                         }}/>
                </div>
                <div style={{marginLeft: '20px'}}> {/* Ürün bilgilerinin olduğu kısım */}
                    <p style={{
                        marginTop: 0,
                        fontSize: 35,
                        color: 'black',
                        fontWeight: 500
                    }}>{product.name}</p>
                    <p style={{color: "midnightblue", fontSize: 25, fontWeight: 500}}>₺ {product.price} </p>
                    <Button className="custom-button" size="large">Sepete Ekle</Button>
                    <Card title="Detaylar" bordered={false} style={{width: 800, height: 100, marginTop: 20}}>
                        <p style={{marginTop: -15, marginBottom: 15}}>{product.description}</p>
                    </Card>
                </div>
            </Content>
        </Layout>
    );
};

export default ProductDetail;
