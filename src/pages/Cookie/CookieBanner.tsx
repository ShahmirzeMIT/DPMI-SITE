import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Box, Button, Typography } from "@mui/material";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 7 });
    setShowBanner(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 7 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        color: "black", // Fix text color issue (was white on white background)
        padding: "16px",
        textAlign: "center",
        zIndex: 1000,
        margin: "0 auto",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0,
        gap: 2,
        animation: "fadeIn 1s forwards", // Fade-in animation
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "@media (max-width: 1050px)": {
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          bottom: 0,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: "8px",
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          maxWidth:'1000px' // Responsive font size
        }}
      >
       By clicking “Accept” you agree to the storing of cookies to improve and personalize your online experience. To learn more about cookies, please see our <a href="/privacy">Privacy Policy.</a> 
      </Typography>
      <Box sx={{marginRight:'40px'}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2a74b1",
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "15px",
            border: '1px solid #2a74b1',
            fontFamily:" Cabin, sans-serif !important",
              margin:'10px',
            "&:hover": {
              backgroundColor: "white",
              color: '#2a74b1'
            },
          
          }}
          onClick={handleAccept}
        >
          Accept 
        </Button>
        <Button
        //   variant="contained"
          sx={{
            color: "#000",
              textTransform: "capitalize",
              border: '1px solid #2a74b1',
              fontSize: "15px",
              fontFamily:" Cabin, sans-serif !important",
                  margin:'10px',
              "&:hover": {
                textDecoration: "none",
                backgroundColor: "#2a74b1",
                color: 'white'
              },
          }}
          onClick={handleReject}
        >
          Decline
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
