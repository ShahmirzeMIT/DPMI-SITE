import { Avatar, Box, Typography } from '@mui/material'
import Logo from '../../assets/images/outComeLogo.jpeg'
export default function OutCome() {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' }, // Mobilde dikey, geniş ekranlarda yatay
        alignItems: 'center',
        marginBottom: '40px',
        marginTop: '80px',
        padding: '20px',
        borderRadius: '8px',
        textAlign: { xs: 'center', md: 'left' }, // Mobilde merkez, genişte sola hizalı
      }}
    >
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' }, // Mobilde merkez, genişte sola hizalı
        }}
      >
    <Typography sx={{color:'black',fontSize:'36px',fontWeight:'400',textAlign:'start',textTransform:'uppercase',marginBottom:'15px'}}>OutCome</Typography>

        <Typography
          sx={{
            color: 'black',
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Ekran boyutuna göre yazı boyutu
            fontWeight: '400',
            textAlign: 'justify',
            lineHeight: '1.8',
            padding: { xs: '0 10px', md: '0' }, // Mobilde iç boşluk
          }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea et quos iusto assumenda quis necessitatibus nobis, minus reprehenderit iste voluptatum minima eveniet. Tempore doloribus magni, eum molestias eveniet exercitationem itaque, expedita hic ipsa ullam non velit ex perspiciatis! Laboriosam, doloribus. Laboriosam sunt et suscipit tenetur nihil repellat dicta veritatis.
          {/* {data.shortDesc} */}
        </Typography>
      </Box>

      <Avatar
        src={Logo}
        sx={{
          width: '100%', // Genişliğe duyarlı
          maxWidth: '300px', // Maksimum genişlik
          height: '250px', // Sabit yükseklik
          marginBottom: { xs: '20px', md: '0px' }, // Mobilde alt boşluk
          marginRight: { md: '20px' }, // Orta ve geniş ekranlarda sağ boşluk
          borderRadius: '8px',
        }}
        // shape="square"
      />
    </Box>
  )
}
