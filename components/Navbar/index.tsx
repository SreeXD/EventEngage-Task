import { Row, Col } from 'antd'
import { RightOutlined, SearchOutlined, InboxOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import Logo from '../../assets/Logo.svg'
import gojoJpg from '../../assets/gojo.jpg'
import style from './style.module.scss'

export default function Navbar() {
    return (
		<Row>
			<Col span={18}>
				<Logo />
				<RightOutlined />
			</Col>

			<Col span={6}>
				<SearchOutlined />
				<InboxOutlined />
				<BellOutlined />
				<QuestionCircleOutlined />
				<img src={gojoJpg.src} />
			</Col>
		</Row>
    )
}
