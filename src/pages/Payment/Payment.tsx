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
          Price: item.Price+" "+item.Currency,
          CourseName: (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={item.CourseImgUrl} style={{ height: "40px", width: "40px", marginRight: "10px" }} />
              <span>{item.CourseName}</span>
            </div>
          ),
          MentorName: (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={item.MentorImgUrl} style={{ height: "40px", width: "40px", marginRight: "10px" }} />
              <span>{item.MentorName}</span>
            </div>
          ),
          enroll:(   <Button  sx={{  background: "#68b631",  height: "25px",  borderRadius: "4px",width: "100px", color: "white",fontWeight:'normal',textTransform:'capitalize'  }}
            onClick={() => onClickNavigate(item)} >
              Pay
          </Button>),
          MoreInfo:(<Button style={{background:'#2A73B1',height: "25px",  borderRadius: "4px",width: "100px", color: "white",fontWeight:'normal',textTransform:'capitalize' }} onClick={()=>changedetailPage(item.FkCourseId)}>More Info</Button>)
        
        }));
        
        setTabelValues(updatedData);
      }
          
      useEffect(() => {
        getTableData();
      }, [])

      const columnConfig = {
        Id: "ID",
        CourseName: "Course",
        MentorName: "Mentor",
        StartDate: "Start Date",
        EndDate: "End Date",
        TimeInterval: "Time Interval",
        ClassDays: "Class Days",
        Price: "Price",
        DiscountedPrice: "Discount Price",
        EnrolmentCount: "Enrolment Count",
        MoreInfo: "More Info",
        enroll: "Enroll",
      };
      
  return ( 
    <Box sx={{marginTop:'135px'}}>
        <TabelPaymet data={tabelValues} columnConfig={columnConfig}/>
    </Box>
  )
}
