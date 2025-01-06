import { Box, useMediaQuery } from "@mui/material";
import MobileTimeline from "./MobileTimeLine";
import DesktopTimeLine from "./DesktopTimeLine";


export interface Module {
    title: string;
    shortDesc: string;
  };
  
export   interface Props  {
    modules: Module[]; 
  };
  
const Timeline = ({ modules }: Props) => {
    const isMobile = useMediaQuery("(max-width:1000px)");
 

    return (
        <Box sx={{}}>
            {
                isMobile ? <MobileTimeline modules={modules}/> : <DesktopTimeLine modules={modules}/>
            }
        </Box>
    );
};

export default Timeline;
