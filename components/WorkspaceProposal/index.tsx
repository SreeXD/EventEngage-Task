import { Row, Col, Typography, Button, Image } from 'antd'
import workspaceImgSrc from '../../assets/workspace.png'
import colabPng from '../../assets/colab.png'
import style from './style.module.scss'

const { Title } = Typography

export default function WorkspaceProposal() {
    return (
        <>
            <Row>
                <Col>
                    <Title>WeWork + SalesForce</Title>
                </Col>
  
                <Col>
                    <Button>Publish / Share</Button>
                </Col>
            </Row>

            <Row>
                <Image src={workspaceImgSrc.src} />

                <div>
                    <img src={colabPng.src} />
                </div>

                <Title>Workspace <br /> Proposal</Title>
            </Row>
        </>
    )
}
