import { Row, Col, Button, Menu } from 'antd'
import { 
    DownloadOutlined, EyeInvisibleOutlined, DeleteOutlined, FilePdfOutlined, ZoomOutOutlined, 
    ZoomInOutlined, LogoutOutlined,MessageOutlined,ShareAltOutlined 
} from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import scopePng from '../../assets/scope.png'
import style from './style.module.scss'

const menuItems: any[] = [
    {
        label: 'Overview',
        disabled: true
    },
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
    const isTablet = useMediaQuery({ maxWidth: 1000 })
    const isMobile = useMediaQuery({ maxWidth: 600 })

    return (
        <div className={style.section}>
            <Row className={style.sectionTop}>
                <Col>
                    <span className={style.title}>Project Scope Recap</span>
                </Col>  

                <Col className={style.progress}>
                    <Row className={style.progressText}>
                        <span>Mutual Action Plan</span>
                        <span className={style.progressVal}>3%</span>
                    </Row>

                    <Row className={style.bars}>
                        {
                            new Array(18).fill(0).map((_, i) => (
                                <span 
                                    key={i} 
                                    className={style.bar} 
                                    style={{
                                        borderTopLeftRadius: (i == 0 ? '4px' : 'auto'),
                                        borderBottomLeftRadius: (i == 0 ? '4px' : 'auto'),
                                        borderTopRightRadius: (i == 17 ? '4px' : 'auto'),
                                        borderBottomRightRadius: (i == 17 ? '4px' : 'auto')
                                    }}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>

            <Row className={style.buttons}>
                <Row className={style.buttonsLeft}>
                    <Button className={style.buttonActive}>Basic Info</Button>
                    <Button>Files</Button>
                    <Button>Mutual Action Plan</Button>
                    <Button>Contacts</Button>
                </Row>  

                {
                    !isMobile &&
                    <Col className={style.buttonsRight}>
                        <Button>Internal Actions</Button>
                    </Col>
                }
            </Row>

            <Row className={style.sectionBottom}>
                {
                    !isTablet &&
                    <Col>
                        <Menu items={menuItems} className={style.menu} />  
                    </Col>
                }

                <Col className={style.companyProfile}>
                    <Row className={style.companyProfileTop}>
                        <Col>
                            <span className={style.companyProfileTitle}>Company Profile</span>
                        </Col>

                        <Col className={style.companyProfileRight}>
                            <DownloadOutlined />

                            <span />

                            <EyeInvisibleOutlined />

                            <span />

                            <DeleteOutlined />
                        </Col>
                    </Row>

                    <Row className={style.scopeImg}>
                        <img src={scopePng.src} />

                        <div className={style.scopeImgText}>
                            <div>
                                wework
                            </div>

                            <div>
                                For all the ways you work, we&apos;re here
                            </div>
                        </div>
  
                        <Row className={style.scopeImgControls}>
                            <span className={style.pdfIcon}>
                                <FilePdfOutlined />
                                <span className={style.pdfIconText}>1/15</span>
                            </span>

                            <span />
                            
                            <DownloadOutlined />
                            
                            <span />
                            
                            <ZoomOutOutlined />
                            
                            <span />
                            
                            <ZoomInOutlined />
                            
                            <span />
                            <LogoutOutlined />
                        </Row>
                    </Row>

                    <Row className={style.bottomIcons}>
                        <MessageOutlined />

                        <span />
                        
                        <ShareAltOutlined />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
