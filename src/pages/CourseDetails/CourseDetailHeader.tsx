import "../../styles/headerSection.css";

interface CourseDetailHeaderProps {
    data:{
        title: string
        img:string
    }
 
}
const CourseDetailHeader = ({data}:CourseDetailHeaderProps) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>{data.title}</h1>
      </div>
      <div className="hero-image">
        <img
          src={data.img} // Şəkil üçün sizin yüklədiyiniz şəkil
          alt="Fullstack Programming"
        />
      </div>
    </div>
  );
};

export default CourseDetailHeader;
