import { useEffect, useState } from 'react'
import { callApi } from '../../utils/callApi'

export default function useCourseState() {
    const [data,setData]=useState([])
    const fetchData = async () => {
       const res=await  callApi('/lms/main/course/read')
       setData(res)
       
    }
    useEffect(() => {
        fetchData()
    },[])
  return {data,setData}
}
