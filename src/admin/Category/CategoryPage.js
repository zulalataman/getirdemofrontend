import {useCallback, useEffect, useState} from "react";
import {Button, message, Popconfirm, Space, Table} from "antd";
import {useNavigate} from "react-router-dom";

const CategoryPage = () => {
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
            title: "Resim",
            dataIndex: "imagePath",
            key: "imagePath",
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
                    <Button type="primary" onClick={() => navigate(`/admin/categories/update/${record.id}`)}>
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Kategoriyi sil"
                        description="Kategoriyi silmek istediğinizden emin misiniz?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteCategory(record.id)}
                    >
                        <Button type="primary" danger>
                            Sil
                        </Button>
                    </Popconfirm>
                </Space>
            )
        },
    ];

    const fetchCategories = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8080/api/category/categories`)

            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.error("Kategoriler başarıyla getirildi.");
            }
        } catch (error) {
            console.log("Kategori getirme işlemi başarısız:", error);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ['http://localhost:8080']);

    const deleteCategory = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/category/deleteCategory/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                message.success("Kategori başarıyla silindi.");
                fetchCategories();
            } else {
                message.error("Silme işlemi başarısız.")
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <Table
            dataSource={dataSource} M
            columns={columns}
            rowKey={(record) => record.id}
            loading={loading}
        />
    );
};

export default CategoryPage