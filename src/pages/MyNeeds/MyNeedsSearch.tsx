import { Box } from "@mui/material";
import { Input } from 'antd';
import './MyNeedsSearch.css';
const { Search } = Input;

interface SearchProps {
  onSearchData: (value: string) => void;
  placheolder?: string;
}

export default function MyNeedsSearch({ onSearchData,placheolder }: SearchProps) {
  const onSearch = (value: string) => {
    onSearchData(value);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "50px auto",
      }}
    >
      <Search
        placeholder={placheolder}
        onSearch={onSearch}
        enterButton
        style={{
          padding: '20px 10px',
          height: '60px', // Hündürlüyü artırır
          fontSize: '16px', // Yazı ölçüsünü artırır
        }}
        className="custom-search"
      />
    </Box>
  );
}
