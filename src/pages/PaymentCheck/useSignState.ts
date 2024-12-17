import  { useState } from 'react'

export default function useSignState() {
    const dateChanhge = (e: { name: string; value: string }) => {
        setProfileState((prev) => ({    
            ...prev,
            date: {
                ...prev.date,
                value: e.value
            }
        }))
    }
    const inputChange = (e: { name: string; value: string }) => {
        setProfileState((prev) => ({    
            ...prev,
            [e.name]: {
                ...prev[e.name as keyof typeof prev],
                value: e.value
            }
        }))
    }
    const selectChange = (e: { name: string; value: string }) => {
        setProfileState((prev) => ({    
            ...prev,
            [e.name]: {
                ...prev[e.name as keyof typeof prev],
                value: e.value
            }
        }))
    }
    const numberChange = (e: { name: string; value: number }) => {
        setProfileState((prev) => ({    
            ...prev,
            [e.name]: {
                ...prev[e.name as keyof typeof prev],
                value: e.value
            }
        }))
    }
    const [profileState, setProfileState] = useState({
        date:{
            label:" Date of Birth",
            value:"2024-12-11",
            name:"date",
            placheolder:"11.12.2022",
            onChange:dateChanhge,
            mandatory: true
        },
        firstName:{
            label:"First Name",
            name:"firstName",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        lastName:{
            label:"Last Name",
            name:"lastName",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        Email:{
            label:"Email",
            name:"Email",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
         },
       
        amount:{
            label:"Amount",
            name:"amount",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        transactionId:{
            label:"Transaction ID",
            name:"transactionId",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        description:{
            label:"Description",
            name:"description",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        billingAddress:{
            label:"Billing Address",
            name:"billingAddress",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        jobTitle:{
            api: "",
            name: "jobTitle",
            value: "2",
            label: "Job Title",
            payload:{},
            status:"",
            onChange:selectChange,
        },
        company:{
            label:"Company",
            name:"company",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true,
        },
        mobile:{
            label:"Mobile",
            name:"mobile",
            value:0,
            placheolder:"",
            onChange:numberChange,
        },
        addressLine1:{
            label:"Address Line 1",
            name:"addressLine1",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        addressLine2:{
            label:"Address Line 2",
            name:"addressLine2",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        linkedin:{
            label:"Linkedin",
            name:"linkedin",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        website:{
            label:"Website",
            name:"website",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        zipCode:{
            label:"Zip Code",
            name:"zipCode",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
        },
        city:{
            api: "",
            name: "city",
            value: "2",
            label: "City",
            payload:{},
            // status:"",
            onChange:selectChange,
        },
        country:{
            api: "",
            name: "country",
            value: "2",
            label: "Country",
            payload:{},
            // status:"",
            onChange:selectChange,
        }
    })
  return {profileState, setProfileState}
}
