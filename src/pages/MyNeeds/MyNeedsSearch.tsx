import { Box } from "@mui/material";
import { Input } from 'antd';
import './MyNeedsSearch.css';


interface SearchProps {
  onSearchData: (value: string) => void;
  placheolder?: string;
}

export default function MyNeedsSearch({ onSearchData,placheolder }: SearchProps) {
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSearchData(value);

  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "50px auto",
      }}
    >
      <Input
        placeholder={placheolder || ""}
        onPressEnter={onSearch}
        // enterButton
        style={{
          padding: '20px 20px',
          height: '60px', // Hündürlüyü artırır
          fontSize: '18px', // Yazı ölçüsünü artırır
          borderRadius: '28px',
        }}
        className="custom-search"
      />
    </Box>
  );
}
