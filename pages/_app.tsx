import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
    return (
		<ConfigProvider 
			theme={{
				token: {
					colorPrimary: '#00B686',
					colorBgBase: '#F2FBF9',
					colorBorder: '#BDC3C2'
				}
			}}
		>
			<Component {...pageProps} />
		</ConfigProvider>
	)
}
