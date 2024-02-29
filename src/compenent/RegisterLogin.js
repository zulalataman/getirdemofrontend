import React from 'react';
import {Button, Form, Input, Layout, theme} from 'antd';

const {Content} = Layout;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const RegisterLogin = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout>
            <Content style={{padding: '0 48px'}}>
                <br/>
                <br/>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Content
                        style={{
                            padding: '0 24px',
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Form
                            name="basic"
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
                                <Button className="custom-button" size="large">
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                    <Content
                        style={{
                            padding: '0 24px',
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
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
                                <Button className="custom-button" size="large">
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
};
export default RegisterLogin;
