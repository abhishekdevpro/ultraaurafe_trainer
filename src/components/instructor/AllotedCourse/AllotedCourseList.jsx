// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import dummy from "../../../assets/Online Course.png";
// import FullPageLoader from "../../home/FullPageLoader";

// const AllotedCourseTable = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [profile, setProfile] = useState(null);

//   const navigate = useNavigate();

//   // Fetch trainer profile
//   useEffect(() => {
//     const token = localStorage.getItem("trainerToken");

//     if (!token) {
//       console.error("No token found");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.novajobs.us/api/trainers/profile",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );

//         if (response.status === 401) {
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//           return;
//         }

//         setProfile(response.data.data);
//       } catch (error) {
//         if (error.response?.status === 401) {
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//         } else {
//           console.error("Error fetching profile", error);
//           setError("Failed to fetch profile. Please try again.");
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   // Fetch courses once profile is available
//   useEffect(() => {
//     if (!profile) return;

//     const fetchCourses = async () => {
//       setLoading(true);
//       const token = localStorage.getItem("trainerToken");

//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/courses-info?alloted_course=true&trainer_id=${profile.id}`,
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );

//         if (response.status === 401) {
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//           return;
//         }

//         setCourses(response.data.data);
//       } catch (error) {
//         if (error.response?.status === 401) {
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//         } else {
//           console.error("Error fetching courses", error);
//           setError("Failed to fetch courses. Please try again.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [profile, navigate]);

//   return (
//     <div className="instructor-course-table">
//       <div className="dashboard-title">
//         <h4>Alloted Courses</h4>
//       </div>

//       {loading ? (
//         <FullPageLoader />
//       ) : (
//         <div className="table-responsive custom-table">
//           <table className="table table-nowrap mb-0">
//             <thead>
//               <tr>
//                 <th>Course Image</th>
//                 <th>Title</th>
//                 <th>Duration</th>
//                 {!localStorage.getItem("adminToken") && <th>Status</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {error ? (
//                 <tr>
//                   <td colSpan="4" className="text-danger">
//                     {error}
//                   </td>
//                 </tr>
//               ) : courses.length > 0 ? (
//                 courses.map((course) => (
//                   <tr key={course.id}>
//                     <td>
//                       <div className="table-course-detail">
//                         <Link to="#" className="course-table-img">
//                           <span>
//                             <img
//                               src={
//                                 course.course_banner_image
//                                   ? `https://api.novajobs.us${course.course_banner_image}`
//                                   : dummy
//                               }
//                               alt={course.course_title}
//                             />
//                           </span>
//                         </Link>
//                       </div>
//                     </td>
//                     <td>{course.course_title}</td>
//                     <td>{course.time_spent_on_course}</td>
//                     {!localStorage.getItem("adminToken") && (
//                       <td>{course.is_active === 1 ? "Active" : "Inactive"}</td>
//                     )}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No courses available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllotedCourseTable;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dummy from "../../../assets/Online Course.png";
import FullPageLoader from "../../home/FullPageLoader";

const AllotedCourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const token = localStorage.getItem("trainerToken");

      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/courses-info?alloted_course=true`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("trainerToken");
          navigate("/");
          return;
        }

        setCourses(response.data?.data || []);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("trainerToken");
          navigate("/");
        } else {
          console.error("Error fetching courses", error);
          setError("Failed to fetch courses. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  return (
    <div className="instructor-course-table">
      <div className="dashboard-title">
        <h4>Alloted Courses</h4>
      </div>

      {loading ? (
        <FullPageLoader />
      ) : (
        <div className="table-responsive custom-table">
          <table className="table table-nowrap mb-0">
            <thead>
              <tr>
                <th>Course Image</th>
                <th>Title</th>
                <th>Duration</th>
                {!localStorage.getItem("adminToken") && <th>Status</th>}
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="4" className="text-danger">
                    {error}
                  </td>
                </tr>
              ) : courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.id || Math.random()}>
                    <td>
                      <div className="table-course-detail">
                        <Link to="#" className="course-table-img">
                          <span>
                            <img
                              src={
                                course?.course_banner_image
                                  ? `https://api.novajobs.us${course.course_banner_image}`
                                  : dummy
                              }
                              alt={course?.course_title || "Course Image"}
                            />
                          </span>
                        </Link>
                      </div>
                    </td>
                    <td>{course?.course_title || "Untitled"}</td>
                    <td>{course?.time_spent_on_course || "N/A"}</td>
                    {!localStorage.getItem("adminToken") && (
                      <td>
                        {course?.is_active === 1
                          ? "Active"
                          : course?.is_active === 0
                          ? "Inactive"
                          : "Unknown"}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No courses available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllotedCourseTable;
