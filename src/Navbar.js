import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Space, Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const Navbar = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}></Col>
        <Col span={6}>
          <h1>The Demo Blog</h1>
        </Col>
        <Col span={6} style={{margin: 10}}>
          <div className="links">
            <Row>
              <Space size={10} align="end">
                <Col span={6}></Col>
                <Col span={6}>

                  <Link type="primary" to="/">
                    <Button type="primary">
                      Home
                    </Button>
                  </Link> {/*Router links*/}

                </Col>
                <Col span={6}></Col>
                <Col span={6}>
                  <Link to="/create">
                    <Button type="primary">
                      New Blog
                    </Button>
                  </Link>
                </Col>
              </Space>
            </Row>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>

  );
};

export default Navbar;