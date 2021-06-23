// @ts-nocheck
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Typography, Row, Col, Input, Button, DatePicker, version, Select } from 'antd';

const EditBlog = (props) => {

    const { Option } = Select;
    const { Title } = Typography;
    const blog = props.blog;
    const [title, setTitle] = useState(blog.title);
    const [body, setBody] = useState(blog.body);
    const [author, setAuthor] = useState(blog.author);
    const { TextArea } = Input;

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 12,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (
        <div className="edit">
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Title level={3}>Edit blog: {blog.title}</Title>
                    <Form onFinish={author} {...layout}>
                        <Form.Item
                            label="Blog title: "
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input title!'
                                }
                            ]}
                            onChange={(e) => setTitle(e.target.value)}>
                            <Input
                                defaultValue={title} />
                        </Form.Item>

                        <Form.Item
                            label="Blog body: "
                            name="body"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input body'
                                }
                            ]}
                            onChange={(e) => setBody(e.target.value)}>
                            <TextArea defaultValue={body} />
                        </Form.Item>

                        <Form.Item
                            label="Blog author"
                            name="author"
                            required={(e) => setAuthor(e.target.value)}
                            rules={[{
                                required: true
                            }]}>
                            <Select>
                                <Option value="mario">mario</Option>
                                <Option value="yoshi">yoshi</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" style={{ margin: 10 }}>Add Blog</Button>
                            <Button type="primary" danger htmlType="reset">Reset</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}></Col>
            </Row>
        </div >
    );
}

export default EditBlog;