import { Box, Button } from '@mui/material'
import TabelPaymet from '../../componets/TabelPaymet'
import { callApi } from '../../utils/callApi';
import { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const [tabelValues, setTabelValues] = useState([]);
    const navigate=useNavigate()

    const onClickNavigate = (item: any) => {
        navigate('/payment');
        localStorage.setItem('paymentData', JSON.stringify(item));
    }
    const changedetailPage=(item: string) => {
        console.log(item,'item');
        navigate(`/classes/${item}`);
    }
      const getTableData = async() => {
        const res= await callApi('/lms/main/class/list')
        
        const updatedData=res.map((item: any, index: number) => ({
          ...item,
          Id: index+1 ,
          CourseName: (
            <div style={{ display: "flex", alignItems: "center",borderRight:'2PX solid #E0E0E0',padding:'20px 20PX 20PX 0PX' ,width:'300px'}}>
              <Avatar src={item.CourseImgUrl} style={{ height: "80px", width: "100px", marginRight: "10px" }}  shape='square'/>
                <Box>
                <span style={{display:'block',fontSize:'18px',fontWeight:'400',color:'#898AA2'}}>Class Name</span>
                <span style={{display:'block',fontSize:'17px',fontWeight:'600',margin:'10px 0'}}>{item.CourseName}</span>
                <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#F27D82',margin:'0px 0 10px 0'}}>WorkShop</span>
                <span style={{color:'#898AA2'}}>Create Simple RegistrationForm</span>
                </Box>
            </div>
          ),
          MentorName: (
            <div style={{ borderRight:'2px solid #E0E0E0',height:'100%'}}>
              <Box sx={{padding:'20px 0PX 0 0PX' ,width:'200px'}}>
                 <Avatar src={item.MentorImgUrl} style={{ height: "40px", width: "40px", marginRight: "10px",position:'absolute',top:'20px',left:'10px',}} />
              <span style={{position:'absolute',top:'30px',left:'70px',fontWeight:'600',fontSize:'16px',color:'#898AA2'}}>{item.MentorName}</span>
              <Box sx={{display:'flex',justifyContent:'center',position:'absolute',top:'70px',left:'55px'}}>
                <span style={{display:'block',fontSize:'17px',fontWeight:'600',color:'#898AA2'}}>Language</span>
                <span style={{display:'block',fontSize:'17px',fontWeight:'600',color:'#972033',margin:'0px 0 10px 10px'}}>English</span>
              </Box>
              </Box>
             
            </div>
          ),
          StartDate:(
            <div style={{ borderRight:'2px solid #E0E0E0',height:'100%',position:'relative'}}>
                <div style={{position:'absolute',top:'10px',left:'0px'}}>
                    <span style={{display:'block',fontSize:'18px',fontWeight:'400',color:'#898AA2'}}>Date</span>
                    <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{item.StartDate}</span>
                    <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{item.TimeInterval}</span>
                    <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{item.ClassDays}</span>
                    <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{"Time Zone"}</span>
                    <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{item.TimeZone}</span>

                </div>
            </div>
               
          ),
          Price:(
            <div style={{ borderRight:'2px solid #E0E0E0',height:'100%',position:'relative',width:'130px'}}>
             <div style={{position:'absolute',top:'20px',left:'0px'}}>
                          <span style={{display:'block',fontSize:'18px',fontWeight:'400',color:'#898AA2'}}>Price</span>
                          <span style={{display:'block',fontSize:'14px',fontWeight:'600',color:'#972033'}}>{item.Price}{" "}{item.Currency} {" "} <span style={{marginLeft:'5px'}}>{"189$"}</span></span>

                      </div>
            </div>
          ),
          MoreInfo:(  
            <div style={{width:'100px',height:'100%'}}>
              <div style={{position:'absolute',top:'20px',left:'-40px'}}>
               <Button  sx={{  background: "#68b631",  height: "35px",  borderRadius: "4px",width: "100px", color: "white",fontWeight:'normal',textTransform:'capitalize'  }}
                  onClick={() => onClickNavigate(item)} >
                  Pay
               </Button>
               <Button style={{background:'#2A73B1',height: "35px",  borderRadius: "4px",width: "100px", color: "white",fontWeight:'normal',textTransform:'capitalize',display:'block',marginTop:'20px' }} onClick={()=>changedetailPage(item.FkCourseId)}>More Info</Button>
            </div>
            </div>
            ),
          // MoreInfo:()
        
        }));
        
        setTabelValues(updatedData);
      }
          
      useEffect(() => {
        getTableData();
      }, [])

      const columnConfig = {
        // Id: "ID",
        CourseName: "Course",
        MentorName: "Mentor",
        StartDate: "Start Date",
        // EndDate: "End Date",
        // TimeInterval: "Time Interval",
        // ClassDays: "Class Days",
        Price: "Price",
        // EnrolmentCount: "Enrolment Count",
        MoreInfo: "More Info",
        // enroll: "Enroll",
      };
      
  return ( 
    <Box sx={{marginTop:'135px'}}>
        <TabelPaymet data={tabelValues} columnConfig={columnConfig}/>
    </Box>
  )
}
