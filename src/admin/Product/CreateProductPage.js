import {Button, Form, Input, message, Spin} from "antd";
import {useState} from "react";

const CreateProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/product/addProduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success("Ürün başarıyla eklendi.")
                form.resetFields();
            } else {
                message.error("Ürün eklenirken hata oluştu.")
            }
        } catch (error) {
            console.log("Ürün ekleme hatası:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Spin spinning={loading}>
            <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
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
                    Ekle
                </Button>
            </Form>
        </Spin>
    );
};

export default CreateProductPage;