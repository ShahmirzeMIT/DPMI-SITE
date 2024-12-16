import axios from "axios";
import { toast } from "react-toastify";

export const callApi = async (url: string, _?: any) => {
    try {
        const response = await axios.post(`https://api.dpminstitute.org${url}`);
        toast.success('Success');
        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) {
            window.location.reload();
            localStorage.removeItem("token");
        }
        toast.error(error.response.data.message);
        toast(error);
    }
};