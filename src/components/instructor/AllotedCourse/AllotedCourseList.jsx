import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dummy from "../../../assets/Online Course.png";
import FullPageLoader from "../../home/FullPageLoader";
import { ChevronDown, ChevronRight, Video, FileText, Eye } from "react-feather";
import "./CourseContentModal.css";
import CreateNoteModal from "./CreateNoteModal";
import ViewNoteModal from "./ViewNoteModal";
import { toast } from "react-toastify";
import Select from "react-select";
import timezoneOptions from "./timezones";
import { Modal, Button, Form } from "react-bootstrap";

const AllotedCourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Add missing state variables for the modal
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [course, setCourse] = useState(null);
  const [isCoursesLoaded, setIsCoursesLoaded] = useState(false);
  const [timezone, setTimezone] = useState("UTC");

  const [videoModal, setVideoModal] = useState({ show: false, src: null });

  // Note modal states
  const [createNoteModal, setCreateNoteModal] = useState({
    show: false,
    courseId: null,
    sectionId: null,
    lectureId: null,
  });
  const [viewNoteModal, setViewNoteModal] = useState({
    show: false,
    notes: [],
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("trainerToken");

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setCourse(null); // clear selected course
  };

  const handleMenuOpen = () => {
    if (!isCoursesLoaded) {
      fetchCourses();
    }
  };

  // Function to format the date and time
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:00`;
  };

  const handleSubmit = async () => {
    // Format the start date before submitting
    const formattedStartDate = formatDate(startDate);

    const classData = {
      course_id: course ? course.value : null,
      start_time: formattedStartDate,
      duration: Number(duration),
      title: title,
      timezone: timezone,
    };

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/live-class",
        classData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message || "Live Class Created Successfully");
      console.log("Live class scheduled successfully:", response.data);

      setTitle("");
      setStartDate("");
      setCourse(null);
      setDuration("");
      handleClose();
      setTimezone("UTC");
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error scheduling live class:", error);
      toast.error(
        error.response?.data?.message || "Error while scheduling the class"
      );
    }
  };

  const openVideoModal = (src) => {
    setVideoModal({ show: true, src });
  };

  const closeVideoModal = () => {
    setVideoModal({ show: false, src: null });
  };

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Note handling functions
  const handleCreateNote = (courseId, sectionId, lectureId = null) => {
    setCreateNoteModal({
      show: true,
      courseId,
      sectionId,
      lectureId,
    });
  };

  const handleViewNotes = async (courseId, sectionId, lectureId = null) => {
    const token = localStorage.getItem("trainerToken");

    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/course-notes/${courseId}?section_id=${sectionId}&lecture_id=${
          lectureId || 0
        }`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setViewNoteModal({
        show: true,
        notes: response.data?.data || [],
      });
    } catch (error) {
      console.error("Error fetching notes:", error);
      setError("Failed to fetch notes.");
      toast.error("Failed to fetch notes. Please try again.");
    }
  };

  const handleSubmitNote = async (formData) => {
    const token = localStorage.getItem("trainerToken");

    try {
      // Debug logging
      console.log("Submitting note with formData:", formData);

      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/add-course-note",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Note created successfully:", response.data);

      // Show success toast
      toast.success(response.data.message || "Note created successfully!");

      // Close the modal
      setCreateNoteModal({
        show: false,
        courseId: null,
        sectionId: null,
        lectureId: null,
      });
    } catch (error) {
      console.error("Error creating note:", error);
      setError("Failed to create note.");
      toast.error("Failed to create note. Please try again.");
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/courses-info?alloted_course=true",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const options = response.data.data.map((courseItem) => ({
        value: courseItem.id,
        label: courseItem.course_title,
      }));
      setCourses(options);
      setIsCoursesLoaded(true);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    const fetchCoursesData = async () => {
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

    fetchCoursesData();
  }, [navigate]);

  const handleViewCourse = async (courseId) => {
    const token = localStorage.getItem("trainerToken");

    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/course-details/${courseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setSelectedCourse(response.data?.data || null);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching course details:", error);
      setError("Failed to fetch course details.");
    }
  };

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
                <th>All Details</th>
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
                    <td>
                      <div className="d-flex flex-wrap gap-2 align-items-center">
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => handleViewCourse(course.id)}
                        >
                          View
                        </button>

                        <Button
                          variant="primary"
                          onClick={() => {
                            setCourse({
                              value: course.id,
                              label: course.course_title,
                            }); // 👈 Prefill course
                            handleShow(); // 👈 Open the modal
                          }}
                        >
                          Schedule New Class
                        </Button>
                      </div>
                    </td>
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
      {showModal && selectedCourse && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCourse.course_title}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Course ID:</strong> {selectedCourse.course_id}
                </p>
                <p>
                  <strong>Title:</strong> {selectedCourse.course_title}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedCourse.course_description || "N/A"}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {selectedCourse.is_active ? "Active" : "Inactive"}
                </p>
                <p>
                  <strong>Certificate Available:</strong>{" "}
                  {selectedCourse.is_certificate ? "Yes" : "No"}
                </p>

                <hr />
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Course Content</h5>
                  <span className="text-muted">
                    {selectedCourse.section_response?.length || 0} Sections
                  </span>
                </div>

                {selectedCourse.section_response?.map((section, index) => (
                  <div className="course-section" key={section.id}>
                    <div
                      className="course-section-header d-flex justify-content-between align-items-center"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <strong>
                          Section {index + 1} : {section.section_name}
                        </strong>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCreateNote(
                              selectedCourse.course_id,
                              section.id
                            );
                          }}
                          title="Add Note"
                        >
                          <FileText size={16} />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewNotes(
                              selectedCourse.course_id,
                              section.id
                            );
                          }}
                          title="View Notes"
                        >
                          <Eye size={16} />
                        </button>
                        {expandedSections[section.id] ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </div>
                    </div>

                    {expandedSections[section.id] && (
                      <div className="course-lecture-list">
                        {section.lectures?.map((lecture) => (
                          <div
                            key={lecture.id}
                            className="lecture-item d-flex justify-content-between align-items-center"
                          >
                            <div className="d-flex align-items-center gap-2">
                              <Video size={16} />
                              <span>{lecture.lecture_name}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() =>
                                  handleCreateNote(
                                    selectedCourse.course_id,
                                    section.id,
                                    lecture.id
                                  )
                                }
                                title="Add Note"
                              >
                                <FileText size={16} />
                              </button>
                              <button
                                className="btn btn-sm btn-outline-info"
                                onClick={() =>
                                  handleViewNotes(
                                    selectedCourse.course_id,
                                    section.id,
                                    lecture.id
                                  )
                                }
                                title="View Notes"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() =>
                                  openVideoModal(
                                    `https://api.novajobs.us${lecture.lecture_location}`
                                  )
                                }
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {videoModal.show && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Lecture Preview</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeVideoModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <video
                  controls
                  src={videoModal.src}
                  className="w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Note Modal */}
      <CreateNoteModal
        show={createNoteModal.show}
        handleClose={() =>
          setCreateNoteModal({
            show: false,
            courseId: null,
            sectionId: null,
            lectureId: null,
          })
        }
        onSubmit={handleSubmitNote}
        courseId={createNoteModal.courseId}
        sectionId={createNoteModal.sectionId}
        lectureId={createNoteModal.lectureId}
      />

      {/* View Notes Modal */}
      <ViewNoteModal
        show={viewNoteModal.show}
        handleClose={() =>
          setViewNoteModal({
            show: false,
            notes: [],
          })
        }
        notes={viewNoteModal.notes}
      />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Live Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter class title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Timezone</Form.Label>
              <Select
                value={timezoneOptions.find((tz) => tz.value === timezone)}
                onChange={(selectedOption) => setTimezone(selectedOption.value)}
                options={timezoneOptions}
                placeholder="Select Timezone"
                classNamePrefix="react-select"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="startdate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                <option value="10">10 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Select
                value={course} // ✅ Now this will be prefilled
                onChange={(selectedOption) => setCourse(selectedOption)}
                options={courses}
                onMenuOpen={handleMenuOpen}
                placeholder="Select a course"
                isLoading={!isCoursesLoaded && courses.length === 0}
                classNamePrefix="react-select"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Schedule Class
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllotedCourseTable;
