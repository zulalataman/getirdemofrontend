import {Button, Form, Input, message, Spin} from "antd";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const UpdateProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const params = useParams();
    const productId = params.id;

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/product/updateProduct/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success("Ürün başarıyla güncellendi.")
            } else {
                message.error("Ürün güncellenirken hata oluştu.")
            }
        } catch (error) {
            console.log("Ürün güncelleme hatası:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);

            try {
                const response = await fetch(`http://localhost:8080/api/product/getProduct/${productId}`);

                if (!response.ok) {
                    throw new Error("Verileri getirme hatası");
                }
                const data = await response.json();

                if (data) {
                    form.setFieldsValue({
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        stock: data.stock,
                        category: data.category.id,
                    });
                }
            } catch (error) {
                console.log("Ürün getirme işlemi başarısız:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ['http://localhost:8080', productId, form]);

    return (
        <Spin spinning={loading}>
            <Form form={form} name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    label="Ürün İsmi"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen ürün adını giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Ürün Açıklaması"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen ürün açıklamasını giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Ürün Fiyatı"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen ürün fiyatını giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Ürün Stoğu"
                    name="stock"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen ürün stoğunu giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Ürün Kategorisi"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen ürün kategorisini giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Güncelle
                </Button>
            </Form>
        </Spin>
    );
};

export default UpdateProductPage;