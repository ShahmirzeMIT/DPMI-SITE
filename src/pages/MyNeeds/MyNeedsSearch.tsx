import { Box } from "@mui/material";
import { Input } from "antd";
import "./MyNeedsSearch.css";

interface SearchProps {
  onSearchData: (value: string) => void;
  placheolder?: string;
}

export default function MyNeedsSearch({ onSearchData, placheolder }: SearchProps) {
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   onSearchData(value);
  // };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchData((e.target as HTMLInputElement).value);
    }
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
        // onChange={onChange}
        onKeyDown={onKeyDown}
        style={{
          padding: "20px 20px",
          height: "60px", // Hündürlüyü artırır
          fontSize: "18px", // Yazı ölçüsünü artırır
          borderRadius: "28px",
        }}
        className="custom-search"
      />
    </Box>
  );
}
