import axios from "axios";
import { toast } from "react-toastify";

export const callApi = async (url: string, params?: any) => {
    try {
        const response = await axios.post(`https://dpminstitute.org/api${url}`, params);
        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) {
            window.location.reload();
            localStorage.removeItem("token");
        }
        
        toast.error(error.response.data.error);
        toast(error);
        return error.response.data;
    }
};