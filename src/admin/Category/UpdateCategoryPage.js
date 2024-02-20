import {Button, Form, Input, message, Spin} from "antd";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const UpdateCategoryPage = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const params = useParams();
    const categoryId = params.id;

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/category/updateCategory/${categoryId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success("Kategori başarıyla güncellendi.")
            } else {
                message.error("Kategori güncellenirken hata oluştu.")
            }
        } catch (error) {
            console.log("Kategori güncelleme hatası:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);

            try {
                const response = await fetch(`http://localhost:8080/api/category/getCategory/${categoryId}`);

                if (!response.ok) {
                    throw new Error("Verileri getirme hatası");
                }
                const data = await response.json();

                if (data) {
                    form.setFieldsValue({
                        name: data.name,
                        description: data.description,
                        imagePath: data.imagePath,
                    });
                }
            } catch (error) {
                console.log("Kategori getirme işlemi başarısız:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ['http://localhost:8080', categoryId, form]);

    return (
        <Spin spinning={loading}>
            <Form form={form} name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
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
                    Güncelle
                </Button>
            </Form>
        </Spin>
    );
};

export default UpdateCategoryPage;