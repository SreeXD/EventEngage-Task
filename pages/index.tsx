import { Layout } from 'antd'
import Spinner from 'react-spinner-material'
import Navbar from '../components/Navbar'
import WorkspaceProposal from '../components/WorkspaceProposal'
import ProjectScopeRecap from '../components/ProjectScopeRecap'
import { useEffect, useState } from 'react'

const { Content } = Layout

export default function Home() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 500)
	}, [])

    return (
      <Layout>
			{
				loading 
				? <div className='spinner-parent'>
					<Spinner radius={32} color='var(--color-active)' stroke={2} visible={true} />
				</div>
				: <>
					<Navbar />

					<Content>
						<WorkspaceProposal />
						<ProjectScopeRecap />
					</Content>
				</>
			}
		</Layout>
    )
}
