import React, {useState} from 'react';
import {Button, Form, Input, Layout, message, Spin, theme} from 'antd';

const {Content} = Layout;
const RegisterLogin = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/user/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success("Kullanıcı başarıyla kaydedildi.")
                form.resetFields();
            } else {
                message.error("Kullanıcı kaydedilirken hata oluştu.")
            }
        } catch (error) {
            console.log("Kullanıcı ekleme hatası:", error);
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Form doğru şekilde doldurulmadı.');
    };

    return (
        <Layout>
            <br/>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Content
                    style={{
                        background: colorBgContainer,
                        height: 330,
                        width: 300,
                        padding: '24px',
                        borderRadius: borderRadiusLG,
                        margin: 'auto',
                        marginRight: '80px',
                        marginLeft: '100px'// Sağ taraftaki içeriği sola kaydırın
                    }}
                >
                    <h1 style={{textAlign: 'center', color: 'midnightblue', marginBottom: '30px'}}>Giriş Yap</h1>
                    <Spin spinning={loading}>
                        <Form
                            name="login"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                                marginBottom: 24,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Mail"
                                name="mail"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen mailinizi giriniz!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen şifrenizi giriniz!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className="custom-button" size="large"
                                        style={{display: 'block', margin: 'auto'}}>
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Content>
                <Content
                    style={{
                        background: colorBgContainer,
                        height: 570,
                        width: 300,
                        padding: '24px',
                        borderRadius: borderRadiusLG,
                        margin: 'auto',
                        marginLeft: '80px',
                        marginRight: '100px'// Sol taraftaki içeriği sağa kaydırın
                    }}
                >
                    <Form
                        name="register"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                            marginBottom: 24,
                            marginTop: 24
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        <h1 style={{textAlign: 'center', color: 'midnightblue', marginBottom: '30px'}}>Kayıt ol</h1>
                        <Form.Item
                            label="Ad"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen adınızı giriniz!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Soyad"
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen soyadınızı giriniz!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Telefon Numarası"
                            name="telephoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen telefon numaranızı giriniz!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Mail"
                            name="mail"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen mailinizi giriniz!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Şifre"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen şifrenizi giriniz!',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            label="Şifreyi Tekrar Giriniz"
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen şifreyi tekrar giriniz!',
                                },
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Şifreler eşleşmiyor!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button className="custom-button" size="large"
                                    type="primary" htmlType="submit"
                                    style={{display: 'block', margin: 'auto'}}>
                                Üye Ol
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </div>
        </Layout>
    );
};

export default RegisterLogin;
