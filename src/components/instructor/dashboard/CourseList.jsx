import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
// import { toast } from 'react-toastify';
import dummy from "../../../assets/Online Course.png";
import FullPageLoader from "../../home/FullPageLoader";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const token = localStorage.getItem("trainerToken");

      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/courses",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("trainerToken");
          window.location.href = "/";
          return;
        }

        setCourses(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized, token may be expired");
          localStorage.removeItem("trainerToken");
          window.location.href = "/";
        } else {
          console.error("There was an error fetching the courses!", error);
          setError("Failed to fetch courses. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="instructor-course-table">
        <div className="dashboard-title">
          <h4>Recently Created Courses</h4>
        </div>
        {loading ? (
          <FullPageLoader />
        ) : (
          <div className="table-responsive custom-table">
            <table className="table table-nowrap mb-0">
              <thead>
                <tr>
                  <th>Course Image</th>
                  <th>Title</th> {/* New column for Course Title */}
                  <th>Enrolled</th>
                  <th>Duration</th>
                  {localStorage.getItem("adminToken") ? " " : <th>Status</th>}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td colSpan="6">{error}</td>
                  </tr>
                ) : courses.length > 0 ? (
                  courses?.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <div className="table-course-detail">
                          {/* {console.log(`https://api.novajobs.us${course.course_banner_image}`)} */}
                          <Link to="#" className="course-table-img">
                            <span>
                              <img
                                src={
                                  course.course_banner_image
                                    ? `https://api.novajobs.us${course.course_banner_image}`
                                    : dummy
                                }
                                alt={course.title}
                              />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>{course.course_title}</td>{" "}
                      {/* Displaying the course title */}
                      <td>{course.enrolled_student_count || 0}</td>
                      <td>{course.time_spent_on_course}</td>
                      {localStorage.getItem("adminToken") ? (
                        " "
                      ) : (
                        <td>{course.is_active == 1 ? "Active" : "InActive"}</td>
                      )}
                      <td>
                        <Link to={`/course-details/${course.id}`}>
                          <button
                            className="btn btn-primary action-btn"
                            // onClick={() => handleEditCourse(course.id,course.is_active)}
                          >
                            <FeatherIcon icon="edit" className="me-2" />
                            Edit
                          </button>
                        </Link>
                        {localStorage.getItem("adminToken") ? (
                          ""
                        ) : (
                          <button className="btn btn-secondary danger-btn">
                            Request Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No courses available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseTable;
