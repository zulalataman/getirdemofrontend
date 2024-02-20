import {Button, Form, Input, message, Spin} from "antd";
import {useState} from "react";

const CreateCategoryPage = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/category/addCategory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success("Kategori başarıyla eklendi.")
                form.resetFields();
            } else {
                message.error("Kategori eklenirken hata oluştu.")
            }
        } catch (error) {
            console.log("Kategori ekleme hatası:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Spin spinning={loading}>
            <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item
                    label="Kategori İsmi"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen kategori adını giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Kategori Açıklaması"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen kategori açıklamasını giriniz!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Kategori Görseli (Link)"
                    name="imagePath"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen kategori görsel linkini giriniz!",
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

export default CreateCategoryPage;