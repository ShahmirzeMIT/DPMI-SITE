import { Layout } from "antd";

import HeaderPart2 from "./HeaderPart2/HeaderPart2";
import Main from "./Main/Main";
import FooterBottom from "./Footer/FooterBottom";

 

 
  const layoutStyle = {
    width: '100%',
  };

export default function Index() {
  return (

    <Layout style={layoutStyle}>
      <HeaderPart2/>
      {/* <HeaderBar/> */}
       <Main/>
      <FooterBottom/>
    </Layout>
  )
}
