// import React, { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const AddSection = () => {
// //   const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
//   const { id } = useParams();
//   const navigate = useNavigate()
//   const [sectionData, setSectionData] = useState({
//     section_name: "",
//     section_objective: "",
//   });
//   console.log(id ,"course id")
//   const handleInputChange = (e) => {
//     setSectionData({ ...sectionData, [e.target.name]: e.target.value });
//   };

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setSectionData({ ...sectionData, section_objective: data });
//   };
//   console.log(sectionData,"section data")
//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.post(
//         `https://api.novajobs.us/api/trainers/${id}/section`,
//         sectionData,
//         {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//       );
//       console.log("Section saved successfully:", response.data.data);
//       navigate(`/course-details/${id}`)
//     } catch (error) {
//       console.error("Error saving section:", error);
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"AddSection"} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Add New Section</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                     <li>
//                       <Link to="/instructor/instructor-dashboard" className="btn btn-black">
//                         Back to Course
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={`/course-details/${id}`} className="btn btn-blue">
//                         Section-List
//                       </Link>
//                     </li>
                    
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="widget-set">
//                   <div className="widget-content multistep-form">
//                     <div className="add-course-info">
//                       <div className="add-course-inner-header">
//                         <h4>Section Information</h4>
//                       </div>
//                       <div className="add-course-form">
//                         <form action="#">
//                           <div className="input-block">
//                             <label className="add-course-label">Section Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Enter section name"
//                               name="section_name"
//                               value={sectionData.section_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="input-block mb-0">
//                             <label className="add-course-label">Section Objective</label>
//                             <div id="editor">
//                               <CKEditor
//                                 editor={ClassicEditor}
//                                 onChange={handleEditorChange}
//                               />
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <Link to="#" className="btn btn-info-light" onClick={handleSave}>
//                           Save Section
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AddSection;


// import React, { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddSection = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [sectionData, setSectionData] = useState({
//     section_name: "",
//     section_objective: "",
//   });

//   const handleInputChange = (e) => {
//     setSectionData({ ...sectionData, [e.target.name]: e.target.value });
//   };

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setSectionData({ ...sectionData, section_objective: data });
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.post(
//         `https://api.novajobs.us/api/trainers/${id}/section`,
//         sectionData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Section saved successfully:", response.data.data);
//       toast.success('Section created successfully!');
//       setTimeout(() => {
//         navigate(`/course-details/${id}`);
//       }, 2000); // Navigate after 2 seconds
//     } catch (error) {
//       console.error("Error saving section:", error);
//       toast.error('Failed to create section. Please try again.');
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"AddSection"} />
//       <ToastContainer position="top-right" autoClose={2000} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Add New Section</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                   <li>
//                       <Link to={`/course-details/${id}`} className="btn btn btn-primary">
//                         Section-List
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/instructor/instructor-dashboard" className="btn btn-black">
//                         Back to Course
//                       </Link>
//                     </li>
                   
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="widget-set">
//                   <div className="widget-content multistep-form">
//                     <div className="add-course-info">
//                       <div className="add-course-inner-header">
//                         <h4>Section Information</h4>
//                       </div>
//                       <div className="add-course-form">
//                         <form action="#">
//                           <div className="input-block">
//                             <label className="add-course-label">Section Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Enter section name"
//                               name="section_name"
//                               value={sectionData.section_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="input-block mb-0">
//                             <label className="add-course-label">Section Objective</label>
//                             <div id="editor">
//                               <CKEditor
//                                 editor={ClassicEditor}
//                                 onChange={handleEditorChange}
//                               />
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <button className="btn btn-info-light" onClick={handleSave}>
//                           Save Section
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AddSection;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [sectionData, setSectionData] = useState({
    section_name: sessionStorage.getItem("section_name") || "",
    section_objective: sessionStorage.getItem("section_objective") || "",
  });

  useEffect(() => {
    // Save section data to session storage whenever it changes
    sessionStorage.setItem("section_name", sectionData.section_name);
    sessionStorage.setItem("section_objective", sectionData.section_objective);
  }, [sectionData]);

  const handleInputChange = (e) => {
    setSectionData({ ...sectionData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setSectionData({ ...sectionData, section_objective: data });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("trainerToken");
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${id}/section`,
        sectionData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Section saved successfully:", response.data.data);
      toast.success('Section created successfully!');
      
      // Clear session storage after successful save
      // sessionStorage.removeItem("section_name");
      // sessionStorage.removeItem("section_objective");

      setTimeout(() => {
        navigate(`/course-details/${id}`);
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error("Error saving section:", error);
      toast.error('Failed to create section. Please try again.');
    }
  };

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddSection"} />
      <ToastContainer position="top-right" autoClose={2000} />

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Add New Section</h2>
                <div className="add-course-btns">
                  <ul className="nav">
                    <li>
                      <Link to={`/course-details/${id}`} className="btn btn btn-primary">
                        Section-List
                      </Link>
                    </li>
                    <li>
                      <Link to={`/course-details/${id}`} className="btn btn-black">
                        Back
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="widget-set">
                  <div className="widget-content multistep-form">
                    <div className="add-course-info">
                      <div className="add-course-inner-header">
                        <h4>Section Information</h4>
                      </div>
                      <div className="add-course-form">
                        <form action="#">
                          <div className="input-block">
                            <label className="add-course-label">Section Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter section name"
                              name="section_name"
                              value={sectionData.section_name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="input-block mb-0">
                            <label className="add-course-label">Section Objective</label>
                            <div id="editor">
                              <CKEditor
                                editor={ClassicEditor}
                                onChange={handleEditorChange}
                                data={sectionData.section_objective}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                        <button className="btn btn-info-light" onClick={handleSave}>
                          Save Section
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddSection;