import { Avatar, Box, Button, Typography } from '@mui/material'
import { FaExclamationCircle } from 'react-icons/fa'; 
import PaymentCourseDescription from './PaymentCourseDescription'
import PaymentModal from './PaymentModal'
import { useNavigate } from 'react-router-dom';

interface Props{
    item:{
        Id: string;
        id: number;
        CourseName: string;
        ClassTitle: string;
        ShortDesc: string;
        MentorName: string;
        MentorImgUrl: string;
        ClassType: string;
        Language: string;
        StartDate: string;
        TimeZone: string;
        SpotsLeft: number;
        TimeInterval: string;
        ClassDays: string;
        CourseImgUrl: string;
        ClassDuration: string;
        ShortBio: string;
        JobTitle: string;
        Company: string;
        Linkedin: string;
        Currency: string;
        Price: string;
        DiscountedPrice: string;
        PromocodeDiscount: string;
        IsOpen: number | string;
        FkCourseId: string;
    }
}

export default function PaymentCard({item}:Props) {
    const navigate = useNavigate();
    const handleEnroll = (item: any) => {
        navigate("/payment");
        localStorage.setItem("paymentData", JSON.stringify(item));
      };
    
      const handleMoreInfo = (courseId: string) => {
        navigate(`/classes/${courseId}`);
      };
  return (
    <Box
    key={item.id}
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      "@media (max-width: 750px)": {
        flexDirection: "column",
        maxWidth: "500px", // Set maximum width
        margin: "40px auto", // Center the component
      },
      border: "1px solid #E0E0E0",
      borderRadius: "8px",
      marginBottom: "20px",
      overflow: "hidden",
      boxShadow: "none",
      background: "#F8F8F8",
      maxWidth: "1340px",
      margin: "40px auto",
    }}
  >
    {/* Section 1: Course Image */}
    <Box sx={{ flex: "0 0 auto", padding: "20px", textAlign: "center" }}>
      <Avatar
        src={item.CourseImgUrl}
        sx={{
          height: { xs: "80px", sm: "100px" },
          width: { xs: "80px", sm: "100px" },
        }}
      />
    </Box>

    {/* Section 2: Course Info */}
    <Box sx={{ flex: "1.5", padding: "25px 20px" }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "28px",
          fontWeight: "600",
          margin: "10px 0",
          color: "black",
          textAlign: "start",
        }}
      >
        {item.CourseName}
      </Typography>

      <PaymentCourseDescription
        title={item.ClassTitle}
        desc={item.ShortDesc}
      />
    </Box>

    {/* Section 3: Mentor Info */}
    <Box
      sx={{
        flex: "1",
        padding: "35px 20px",
        borderLeft: { sm: "1px solid #E0E0E0" },
        "@media (max-width: 750px)": {
          borderLeft: "none",
        },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Avatar
          src={item.MentorImgUrl}
          sx={{
            height: "40px",
            width: "40px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        />
        <Typography
          variant="body1"
          sx={{ fontWeight: "600", fontSize: "18px", color: "black" }}
        >
          <PaymentModal
            title={item.MentorName}
            Img={item.MentorImgUrl}
            name={item.MentorName}
            desc={item.ShortBio}
            JobTitle={item.JobTitle}
            Linkedin={item.Linkedin}
            Company={item.Company}
          />
        </Typography>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#F27D82",
          margin: "0px 0 10px 0",
          marginTop: "10px",
        }}
      >
        {item.ClassType}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "18px", color: "black", marginTop: "10px" }}
      >
        Language:{" "}
        <span style={{ color: "#FA6B23", fontWeight: "700",fontSize:'18px' }}>
          {item.Language}
        </span>
      </Typography>
    </Box>

    {/* Section 4: Schedule Info */}
    <Box
      sx={{
        flex: "1",
        padding: "10px 20px",
        borderLeft: { sm: "1px solid #E0E0E0" },
        "@media (max-width: 750px)": {
          borderLeft: "none",
        },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          display: "block",
          fontSize: "20px",
          fontWeight: "600",
          color: "black",
          marginBottom: "15px",
        }}
      >
        {item.StartDate}
      </Typography>
      {item.SpotsLeft > 0 && (
        <Button
          sx={{
            backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 6px",
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          <FaExclamationCircle /> {item.SpotsLeft} {"Spots Left"}
        </Button>
      )}

      {/* <Typography
        variant="body2"
        sx={{
          display: "block",
          fontSize: "15px",
          fontWeight: "600",
          color: "black",
          marginBottom: "5px",
        }}
      >
        {item.TimeInterval}
      </Typography> */}
      <Typography
        variant="body2"
        sx={{
          display: "block",
          fontSize: "16px",
          color: "black",
          marginBottom: "5px",
        }}
      >
        {item.ClassDays}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          display: "block",
          fontSize: "16px",
          color: "black",
          marginBottom: "5px",
        }}
      >
        Time Zone: {item.TimeZone}
      </Typography>
    </Box>

    {/* Section 5: Price Info */}
    <Box
      sx={{
        flex: "1",
        padding: "55px 0",
        borderLeft: { sm: "1px solid #E0E0E0" },
        "@media (max-width: 750px)": {
          borderLeft: "none",
        },
        textAlign: "center",
        height: "150%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#2A73B1",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {item.Currency}
            {item.DiscountedPrice}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "red",
              position: "relative",
              marginTop: "5px",
              marginLeft: "10px",
              fontSize: "20px",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "red",
                transform: "rotate(-10deg)", // Burada xətti əyirik
                transformOrigin: "center",
              },
            }}
          >
            {item.Currency}
            {item.Price}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: item.IsOpen == 1 ? "#5693F0" : "#C4C4C4",
              color: item.IsOpen == 1 ? "#fff" : "#8E8E8E",
              textTransform: "uppercase",
              fontSize: "12px",
              maxWidth: "120px",
              margin: "10px auto",
              cursor: item.IsOpen == 1 ? "pointer" : "not-allowed",
              pointerEvents: item.IsOpen == 1 ? "auto" : "none", // Disable button interaction
            }}
            onClick={() => item.IsOpen == 1 && handleEnroll(item)}
          >
            {item.IsOpen == 1 ? (
                "Enroll Now"
              ) : (
                <>
                  Coming Soon:<br />
                  Enroll Now
                </>
              )}

          </Button>

          <br />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FA6B23",
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "12px",
              maxWidth: "120px",
              padding: "5px 20px",
              minWidth: "110px",
              minHeight: "33px",
            }}
            onClick={() => handleMoreInfo(item.Id)}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>

    {/* Section 6: Actions */}
  </Box>
  )
}
