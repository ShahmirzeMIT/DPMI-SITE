import { Box } from "@mui/material";
import {  Input} from 'antd';
const { Search } = Input;
interface SearchProps {
    onSearchData: (value: string) => void
}
export default function MyNeedsSearch({onSearchData}:SearchProps) {
    const onSearch = (value: string) =>{
        onSearchData(value)
    };
  return (
    <Box sx={{ maxWidth: "1200px",
        margin: "50px auto",}}>
        <Search
         placeholder="Search Challenges" onSearch={onSearch} enterButton />
    </Box>
  )
}
