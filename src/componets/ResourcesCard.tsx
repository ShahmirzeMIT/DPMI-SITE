import { Card, CardContent, CardMedia, Typography } from '@mui/material'
export default function ResourcesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
   
  </Card>
  )
}
