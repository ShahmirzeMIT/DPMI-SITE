import { useEffect, useState } from 'react'
import { callApi } from '../../utils/callApi'

export default function useCourseState() {
    const [data,setData]=useState([])

    // https://dpminstitute.org/api/lms/main/course/read
    const fetchData = async () => {
       const res=await  callApi('/lms/main/course/read')
       console.log(res,'res');
       setData(res)
       
    }
    useEffect(() => {
        fetchData()
    },[])
  return {data,setData}
}
