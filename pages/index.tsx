import { Layout } from 'antd'
import Navbar from '../components/Navbar'
import WorkspaceProposal from '../components/WorkspaceProposal'
import ProjectScopeRecap from '../components/ProjectScopeRecap'

const { Content } = Layout

export default function Home() {
    return (
      <Layout>
			<Navbar />

			<Content>
				<WorkspaceProposal />
				<ProjectScopeRecap />
			</Content>
		</Layout>
    )
}
