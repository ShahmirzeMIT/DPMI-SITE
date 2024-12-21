import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
interface TopicCardsProps {
    data:{
        title:string
    }
}
export default function TopicCards({data}:TopicCardsProps) {
  return (
    <Card sx={{ maxWidth: 345,padding:'20px' }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
