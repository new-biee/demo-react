import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditBlog from "./EditBlog";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    
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
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Write by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleEdit}>Edit</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={handleClick}>Delete</button>
                    </article>
                )}
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
