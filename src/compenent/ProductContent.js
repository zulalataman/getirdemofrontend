import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

const ProductContent = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

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

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
                <div key={product.id} style={{
                    width: '200px',
                    margin: '10px',
                    border: '1px solid #f0ffff',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center'
                }}>
                    <img src={product.img} alt={product.name}
                         style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} />
                    <p style={{ color: 'lightslategrey', fontSize: '20px', marginBottom: '5px' }}>{product.price} ₺</p>
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

ProductContent.propTypes = {
    categoryId: PropTypes.number,
};

export default ProductContent;
