import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/"); // Redirect to "/home"
  };

  return (
    <div style={{marginTop:'120px'}}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={onClick}>Back Home</Button>}
      />
    </div>
  );
}
