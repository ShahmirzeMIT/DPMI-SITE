import { Footer } from 'antd/es/layout/layout'

const footerStyle = {
    textAlign: 'center' as const,
    color: '#fff',
    backgroundColor: '#4096ff',
  };
export default function FooterBottom() {
  return (
    <Footer style={footerStyle}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  )
}
