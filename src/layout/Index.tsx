import { Layout } from "antd";
import HeaderBar from "./Header/HeaderBar";
import Main from "./Main/Main";
import FooterBottom from "./Footer/FooterBottom";

 

 
  const layoutStyle = {
    width: '100%',
  };

export default function Index() {
  return (

    <Layout style={layoutStyle}>
      <HeaderBar/>
       <Main/>
      <FooterBottom/>
    </Layout>
  )
}
