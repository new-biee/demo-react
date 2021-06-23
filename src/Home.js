import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Row, Col } from 'antd';

const Home = () => {
  const { isPending, error, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </Col>
        <Col span={8}></Col>
      </Row>

    </div >
  );
}
//npx json-server --watch data/db.json --port 8000
export default Home;
