
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams(); // URL-dən kursun ID-sini alır

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {courseId}</p>
    </div>
  );
};

export default CourseDetails;
