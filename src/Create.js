// @ts-nocheck
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';

const { Option } = Select;
const { Title } = Typography;
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const blog = { title, body, author };

  const handleSubmit = (e) => {

    console.log('submit');
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/');
    });
  };

  const handleInputReset = () => {
    document.getElementById("create-form").reset();
  };

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
    <div className="create">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Title level={3}>Add a New Blog</Title>
          <Form onFinish={handleSubmit} {...layout}>
            <Form.Item
              label="Blog title:"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input title!'
                }
              ]}
              onChange={(e) => setTitle(e.target.value)}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Blog body:"
              name="body"
              rules={[
                {
                  required: true,
                  message: 'Please input body!'
                }
              ]}
              onChange={(e) => setBody(e.target.value)}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Blog author:"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            >
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
    </div>
  );
};

export default Create;
