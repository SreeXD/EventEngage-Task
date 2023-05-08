import { Row, Col, Button, Image } from 'antd'
import workspaceImgSrc from '../../assets/workspace.png'
import colabPng from '../../assets/colab.png'
import style from './style.module.scss'

export default function WorkspaceProposal() {
    return (
        <div className={style.section}>
            <Row className={style.sectionTop}>
                <Col className={style.title}>
                    <span>WeWork + SalesForce</span>
                </Col>

                <Button className={style.button}>Publish / Share</Button>
            </Row>

            <Row className={style.image}>
                <Image src={workspaceImgSrc.src} />

                <span className={style.imageText}>
                    Workspace <br /> Proposal
                </span>

                <div className={style.imageColab}>
                    <img src={colabPng.src} />
                </div>
            </Row>
        </div>
    )
}
