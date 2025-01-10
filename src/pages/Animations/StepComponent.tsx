import { Box, useMediaQuery } from "@mui/material";
import MobileTimeline from "./MobileTimeLine";
import DesktopTimeLine from "./DesktopTimeLine";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";


export interface Module {
    title: string;
    shortDesc: string;
    course?: Array<{
      title: string;
      id: string;
      shortDesc: string;
    }>;
  };
  
export   interface Props  {
    modules: Module[]; 
    index?: number
    finishTitle?: string
    icon?: string
  };
  
const Timeline = ({ modules, index }: Props) => {
    const isMobile = useMediaQuery("(max-width:1000px)");
    const data = ProductManagerCardDataNavbar.find(
        (item: { openId: string }) => item.openId === index?.toString()
      );
      console.log(data, "data", index);
    return (
        <Box sx={{}}>
            {
                isMobile ? <MobileTimeline modules={modules} finishTitle={data?.shorts}  icon={data?.image}/> : <DesktopTimeLine modules={modules} finishTitle={data?.shorts || ""} icon={data?.image || ""}/>
            }
        </Box>
    );
};

export default Timeline;
