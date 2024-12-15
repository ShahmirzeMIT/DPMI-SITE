
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
const contentStyle = {
    textAlign: 'center' as const,
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
  };
export default function Main() {
  return (
    <Content style={contentStyle}>
      <Outlet/>
    </Content>
  )
}
