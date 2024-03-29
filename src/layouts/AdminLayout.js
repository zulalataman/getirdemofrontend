import {Layout, Menu} from "antd";
import PropTypes from "prop-types";
import {
    UserOutlined,
    LaptopOutlined,
    RollbackOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const {Sider, Header, Content} = Layout;

const AdminLayout = ({children}) => {
    const navigate = useNavigate();

    const menuItems = [
        {
            key: "1",
            icon: <DashboardOutlined/>,
            label: "Dashboard",
            onClick: () => {
                navigate(`/admin`);
            },
        },
        {
            key: "2",
            icon: <AppstoreOutlined/>,
            label: "Kategoriler",
            path: "/",
            children: [
                {
                    key: "3",
                    label: "Kategori Listesi",
                    path: "/admin/categories",
                    onClick: () => {
                        navigate(`/admin/categories`);
                    },
                },
                {
                    key: "4",
                    label: "Yeni Kategori Oluştur",
                    path: "/admin/categories/create",
                    onClick: () => {
                        navigate("/admin/categories/create");
                    },
                },
            ],
        },
        {
            key: "5",
            icon: <LaptopOutlined/>,
            label: "Ürünler",
            path: "/",
            children: [
                {
                    key: "6",
                    label: "Ürün Listesi",
                    path: "/admin/products",
                    onClick: () => {
                        navigate(`/admin/products`);
                    },
                },
                {
                    key: "7",
                    label: "Yeni Ürün Oluştur",
                    path: "/admin/products/create",
                    onClick: () => {
                        navigate("/admin/products/create");
                    },
                },
            ],
        },
        {
            key: "8",
            icon: <UserOutlined/>,
            label: "Kullanıcı Listesi",
            path: "/admin/users",
            onClick: () => {
                navigate(`/admin/users`);
            },
        },
        {
            key: "9",
            icon: <ShoppingCartOutlined/>,
            label: "Siparişler",
            onClick: () => {
                navigate(`/admin/orders`);
            },
        },
        {
            key: "10",
            icon: <RollbackOutlined/>,
            label: "Ana Sayfaya Git",
            path: "/category/menu",
            onClick: () => {
                navigate(`/category/menu`);
                window.location.reload();
            },
        },
    ];

    return (
        <div className="admin-layout">
            <Layout
                style={{
                    minHeight: "100vh",
                }}
            >
                <Sider width={200} theme="dark">
                    <Menu
                        mode="vertical"
                        style={{
                            height: "100%",
                        }}
                        items={menuItems}
                    />
                </Sider>
                <Layout>
                    <Header>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "white",
                            }}
                        >
                            <h2>Admin Paneli</h2>
                        </div>
                    </Header>
                    <Content>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: "24px 50px",
                                minHeight: 360,
                            }}
                        >
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AdminLayout;

AdminLayout.propTypes = {
    children: PropTypes.node,
};