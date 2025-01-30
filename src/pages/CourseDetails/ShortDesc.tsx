import { Avatar, Box, Typography } from '@mui/material';
// import { Avatar } from 'antd';
import Logo from '../../assets/images/courseLogo.png';

interface ShortDescProps {
  data: {
    shortDesc: string;
    
  };
}

export default function ShortDesc({ data }: ShortDescProps) {
  return (
    <>
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
      {/* Image Section */}
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

      {/* Text Section */}
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          marginLeft:'20px' // Mobilde merkez, genişte sola hizalı
        }}
      >
    <Typography sx={{color:'black',fontSize:'28px',fontWeight:'400',textAlign:'start',textTransform:'uppercase',marginBottom:'15px'}}>Purpose</Typography>

        <Typography
          sx={{
            color: 'black',
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Ekran boyutuna göre yazı boyutu
            fontWeight: '400',
            textAlign: 'justify',
            lineHeight: '1.8',
            padding: { xs: '0 10px', md: '0' }, // Mobilde iç boşluk
          }}
          dangerouslySetInnerHTML={{ __html: data.shortDesc }}
        />
      </Box>
    </Box>
    </>
  
  );
}
