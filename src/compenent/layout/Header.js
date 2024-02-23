import React from 'react';
import { Button, Menu, Typography } from 'antd';
import { ShoppingCartOutlined, ProfileOutlined } from '@ant-design/icons';

const items1 = ['1'].map((key) => ({
    key,
    label: <Typography.Text strong style={{ fontSize: '28px', color: 'white', marginBottom:'20px', marginTop:'20px' }}>GETİR</Typography.Text>,
}));

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
            <div className="demo-logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{
                    flex: 1,
                    minWidth: 0,
                    backgroundColor: '#001529', // Menü arka plan rengi
                }}
            />
            {/* Sepet butonu */}
            <Button
                type="text"
                icon={<ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} />}
                style={{ backgroundColor: '#001529', color: 'white', marginRight: '35px' }}
            />
            {/* Profil butonu */}
            <Button
                type="text"
                icon={<ProfileOutlined style={{ fontSize: '30px', color: 'white',}} />}
                style={{ backgroundColor: '#001529', color: 'white', marginRight: '35px', marginBottom:'20px', marginTop:'20px'}}
            />
        </header>
    );
};

export default Header;