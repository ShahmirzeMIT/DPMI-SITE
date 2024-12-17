import { Box } from '@mui/material'

import TabelPaymet from '../../componets/TabelPaymet'
import { callApi } from '../../utils/callApi';
import { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import ButtonPayment from '../../componets/ButtonPayment';

export default function Payment() {
    const [tabelValues, setTabelValues] = useState([]);

    

/*************  ✨ Codeium Command ⭐  *************/
/******  b0e64b4d-5b4a-459b-a188-e33e0d10eaeb  *******/
      const getTableData = async() => {
        const res= await callApi('/lms/main/class/list')
        console.log(res);
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
          enroll:(<ButtonPayment/>)
        
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
        enroll: "Enroll",
      };
      
  return ( 
    <Box>
        <TabelPaymet data={tabelValues} columnConfig={columnConfig}/>
    </Box>
  )
}
