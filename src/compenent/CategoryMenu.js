import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

const CategoryMenu = ({ onCategoryClick }) => {
    const [categories, setCategories] = useState([]);

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
        onCategoryClick(categoryId);
    }

    const items = categories.map((category, index) => ({
        key: `sub${index + 1}`,
        icon: <img src={category.imagePath} alt={category.name} style={{ width: '24px', height: '24px' }} />,
        label: category.name,
        onClick: () => handleCategoryClick(category.id),
    }));

    return (
        <Sider
            style={{
                background: theme.useToken().token.colorBgContainer,
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
                items={items}
            />
        </Sider>
    );
};

CategoryMenu.propTypes = {
    onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryMenu;
