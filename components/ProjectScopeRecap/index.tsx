import { Row, Col, Typography, Button, Menu } from 'antd'
import { 
    DownloadOutlined, EyeInvisibleOutlined, DeleteOutlined, FilePdfOutlined, ZoomOutOutlined, 
    ZoomInOutlined, LogoutOutlined,MessageOutlined,ShareAltOutlined 
} from '@ant-design/icons'
import scopePng from '../../assets/scope.png'
import style from './style.module.scss'

const { Title, Text } = Typography

const menuItems  = [
    {
        label: 'Welcome'
    },
    {
        label: 'Product Capabilities'
    },
    {
        label: 'Customer Success Stories'
    },
    {
        label: 'File Sharing'
    },
    {
        label: 'Our deck'
    }
]

export default function ProjectScopeRecap() {
    return (
        <>
            <Row>
                <Col>
                    <Title>Project Scope Recap</Title>
                </Col>  

                <Col>
                    <Row>
                        <Col>
                            <Text>Mutual Action Plan</Text>
                            <Text>3%</Text>
                        </Col>
                    </Row>

                    <Row>
                        {
                            new Array(18).map((_, i) => (
                                <Col />
                            ))
                        }
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button>Basic Info</Button>
                    <Button>Files</Button>
                    <Button>Mutual Action Plan</Button>
                    <Button>Contacts</Button>
                </Col>  

                <Col>
                    <Button>Internal Actions</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Title>Overview</Title>
                    <Menu items={menuItems} />  
                </Col>

                <Col>
                    <Row>
                        <Col>
                            <Title>Company Profile</Title>
                        </Col>

                        <Col>
                            <div>
                                <DownloadOutlined />
                                <span />
                                <EyeInvisibleOutlined />
                                <span />
                                <DeleteOutlined />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <img src={scopePng.src} />

                        <div>
                            <Row>wework</Row>
                            <Row>For all the ways you work, we're here</Row>
                        </div>
  
                        <div>
                            <FilePdfOutlined />
                            <Text>1/15</Text>
                            <span />
                            <DownloadOutlined />
                            <span />
                            <ZoomOutOutlined />
                            <span />
                            <ZoomInOutlined />
                            <span />
                            <LogoutOutlined />
                        </div>
                    </Row>

                    <Row>
                        <MessageOutlined />
                        <span />
                        <ShareAltOutlined />
                    </Row>
                </Col>
            </Row>
        </>
    )
}
