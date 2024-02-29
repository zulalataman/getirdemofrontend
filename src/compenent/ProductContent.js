import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ProductContent = ({categoryId}) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryId !== null) {
            fetch(`http://localhost:8080/api/product/${categoryId}/products`)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setProducts(data);
                    } else {
                        console.error('Gelen veri bir dizi değil:', data);
                    }
                })
                .catch(error => {
                    console.error('Ürün verileri çekilirken hata oluştu:', error);
                });
        }
    }, [categoryId]);

    // Ürüne tıklama işlemi
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Ürün ID'sine göre URL oluştur ve yönlendir
    };

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map(product => (
                <div key={product.id} style={{
                    width: '200px',
                    margin: '10px',
                    border: '1px solid #f0ffff',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    cursor: 'pointer' // Cursor'u değiştir, tıklanabilir hale getir
                }} onClick={() => handleProductClick(product.id)}>
                    <img src={product.img} alt={product.name}
                         style={{width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px'}}/>
                    <p style={{color: 'lightslategrey', fontSize: '20px', marginBottom: '5px'}}>{product.price} ₺</p>
                    <h3 style={{
                        color: 'midnightblue',
                        marginTop: '1px',
                        fontSize: '23px',
                        marginBottom: '1px'
                    }}>{product.name}</h3>
                    <p style={{
                        color: 'lightslategrey',
                        marginTop: '1px',
                        marginBottom: '1px'
                    }}>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductContent;
