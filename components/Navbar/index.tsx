import { useState } from 'react'
import { Row, Col } from 'antd'
import { RightOutlined, SearchOutlined, InboxOutlined, BellOutlined, QuestionCircleOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import Logo from '../../assets/Logo.svg'
import gojoJpg from '../../assets/gojo.jpg'
import style from './style.module.scss'

export default function Navbar() {
	const isMobile = useMediaQuery({ maxWidth: 600 })
	const [navActive, setNavActive] = useState(false)

    return (
		<Row className={style.nav}>
			<Col>
				<Row className={style.navLeft}>
					<Logo />
					<RightOutlined />
				</Row>
			</Col>

			<Row className={style.navRight}>
				{
					isMobile 
						? <Col className={style.icon} onClick={() => setNavActive(true)}>
							<MenuOutlined />
						</ Col>

						: <>
							<Col className={style.icon}>
								<SearchOutlined />
							</Col>

							<Col className={style.icon}>
								<InboxOutlined />
							</Col>

							<Col className={style.icon}>
								<BellOutlined />
							</Col>

							<Col className={style.icon}>
								<QuestionCircleOutlined />
							</Col>

							<Col>
								<img className={style.avatar} src={gojoJpg.src} />
							</Col>
						</>
				}
			</Row>

			{
				isMobile && navActive &&
				<div className={style.navMenu}>
					<CloseOutlined className={`${style.toggler} ${style.icon}`} onClick={() => setNavActive(false)} />

					<Row className={style.navMenuItem}>
						<Col>
							<img className={style.menuAvatar} src={gojoJpg.src} />
						</Col>

						<Col>
							<Row className={style.name}>
								Nagendran N	
							</Row>	

							<Row className={style.role}>
								Developer	
							</Row>					
						</Col>
					</Row>

					<Row className={style.navMenuItem}>
						<span className={style.menuIcon}>
							<SearchOutlined  />
						</span>
						
						<span className={style.menuItemName}>Search</span>
					</Row>

					<Row className={style.navMenuItem}>
						<span className={style.menuIcon}>
							<InboxOutlined  />
						</span>
						
						<span className={style.menuItemName}>Inbox</span>
					</Row>

					<Row className={style.navMenuItem}>
						<span className={style.menuIcon}>
							<BellOutlined  />
						</span>
						
						<span className={style.menuItemName}>Notifications</span>
					</Row>

					<Row className={style.navMenuItem}>
						<span className={style.menuIcon}>
							<QuestionCircleOutlined  />
						</span>
						
						<span className={style.menuItemName}>Help</span>
					</Row>
				</div>
			}
		</Row>
    )
}
