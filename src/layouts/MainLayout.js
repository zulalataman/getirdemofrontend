import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Header from "../compenent/layout/Header";
import PageFooter from "../compenent/layout/Footer";
import CategoryMenu from "../compenent/CategoryMenu";
import ProductContent from "../compenent/ProductContent";

const { Content } = Layout;

const MainLayout = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    }

    return (
        <Layout>
            <Header />
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <br />
                <br />
                <Layout
                    style={{
                        padding: '24px 0',
                        background: theme.useToken().token.colorBgContainer,
                        borderRadius: theme.useToken().token.borderRadiusLG,
                    }}
                >
                    <CategoryMenu onCategoryClick={handleCategoryClick} />
                    <ProductContent categoryId={selectedCategoryId} />
                </Layout>
            </Content>
            <PageFooter />
        </Layout>
    );
};

export default MainLayout;
