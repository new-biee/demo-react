import { Link } from 'react-router-dom';
import { Space, Card } from 'antd';

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Card title={blog.title}>
                        <Link to={`/blogs/${blog.id}`}>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </Card>

                </div>
            ))}
        </div>
    );
}

export default BlogList;