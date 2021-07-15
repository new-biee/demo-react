import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditBlog from "./EditBlog";
import useFetch from "./useFetch";
import { Form, Typography, Row, Col, Input, Button, DatePicker, version, Select } from 'antd';

const BlogDetails = () => {
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const { Title } = Typography;

    const {
        data: blog,
        error,
        isPending,
    } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    const handleEdit = (e) => {
        setIsEditing(true)
    }

    const renderDetails = () => {
        return (
            <div className="blog-details">
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        {isPending && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {blog && (
                            <article>
                                <Title level={3} type="danger">{blog.title}</Title>
                                <Title level={5}>Write by {blog.author}</Title>
                                <div>{blog.body}</div>
                                <br />
                                <Button onClick={handleEdit} type="primary">Edit</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button onClick={handleClick} type="danger">Delete</Button>
                            </article>
                        )}
                    </Col>
                    <Col span={8}></Col>
                </Row>

            </div>
        )
    }

    const renderContent = () => {
        if (!isEditing) {
            return renderDetails();
        } else {
            return <EditBlog blog={blog} />
        }
    }

    return (
        renderContent()
    );
};

export default BlogDetails;
