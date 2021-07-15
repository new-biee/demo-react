// @ts-nocheck
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Typography, Row, Col, Input, Button, DatePicker, version, Select } from 'antd';
import useFetch from './useFetch';

const EditBlog = (props) => {
    const { Option } = Select;
    const { Title } = Typography;
    const blog = props.blog;
    const [title, setTitle] = useState(blog.title);
    const [body, setBody] = useState(blog.body);
    const [author, setAuthor] = useState(blog.author);
    const { TextArea } = Input;
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

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

    const handleSubmit = (e) => {
        setIsPending(true);
        blog.title = title;
        blog.body = body;
        blog.author = author;
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log(blog);
            setIsPending(false);
            history.push('/');
        })
    };

    return (
        <div className="edit">
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Title level={3}>Edit blog: {blog.title}</Title>
                    <Form onFinish={handleSubmit} {...layout} initialValues={{ title: blog.title, body: blog.body, author: blog.author, id: blog.id }}>
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
                            />
                        </Form.Item>

                        <Form.Item
                            label="Blog body: "
                            name="body"
                            onChange={(e) => setBody(e.target.value)}
                            rules={[
                                {
                                    required: true,
                                    message: 'Plesase input body!'
                                }
                            ]}>
                            <TextArea />
                        </Form.Item>

                        <Form.Item
                            label="Blog author"
                            name="author"
                        >
                            <Select
                                value={author}
                                onChange={value => setAuthor(value)}>

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