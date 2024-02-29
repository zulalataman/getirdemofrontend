import React, {useEffect, useState} from 'react';
import {Layout, Menu, theme} from 'antd';
import ProductContent from './ProductContent';

const {Content, Sider} = Layout;

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/category/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Kategori verilerini çekerken hata oluştu:', error);
            });
    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    }

    const items2 = categories.map((category, index) => ({
        key: `sub${index + 1}`,
        icon: <img src={category.imagePath} alt={category.name} style={{width: '24px', height: '24px'}}/>,
        label: category.name,
        onClick: () => handleCategoryClick(category.id),
        style: {color: 'midnightblue'}
    }));

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <br/>
                <br/>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            items={items2}
                        />
                    </Sider>
                    <Content>
                        {/* ProductContent bileşeninin çağrılması */}
                        <ProductContent categoryId={selectedCategoryId}/>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
};
export default CategoryMenu;
