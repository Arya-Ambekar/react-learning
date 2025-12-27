import React from "react";
import { useParams } from "react-router-dom";
const CourseDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Course details page</h1>
      <h2 className="text-center text-4xl p-25">Course: {params.courseId}</h2>
    </div>
  );
};

export default CourseDetails;
