import {useCallback, useEffect, useState} from "react";
import {Button, message, Popconfirm, Space, Table} from "antd";
import {useNavigate} from "react-router-dom";

const ProductPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ad",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Açıklama",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Fiyat",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Stok",
            dataIndex: "stock",
            key: "stock",
        },
        {
            title: "Kategori",
            dataIndex: "category",
            key: "category",
            render: (category) => category.name,
        },
        {
            title: "Resim",
            dataIndex: "img",
            key: "img",
            render: (imgSrc) => (
                <img
                    src={imgSrc}
                    alt="Resim"
                    style={{
                        width: "70px",
                        height: "70px",
                    }}
                />
            ),
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    {/*divle yazarsak boşluk olmaz butonlar arasında*/}
                    <Button type="primary" onClick={() => navigate(`/admin/products/update/${record.id}`)}>
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Ürünü sil"
                        description="Ürünü silmek istediğinizden emin misiniz?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteProduct(record.id)}
                    >
                        <Button type="primary" danger>
                            Sil
                        </Button>
                    </Popconfirm>
                </Space>
            )
        },
    ];

    const fetchProducts = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8080/api/product/products`)

            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.error("Ürünler başarıyla getirildi.");
            }
        } catch (error) {
            console.log("Ürün getirme işlemi başarısız:", error);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ['http://localhost:8080']);

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/product/deleteProduct/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                message.success("Ürün başarıyla silindi.");
                fetchProducts();
            } else {
                message.error("Silme işlemi başarısız.")
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => record.id}
            loading={loading}
        />
    );
};

export default ProductPage