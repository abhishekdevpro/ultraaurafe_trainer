// import React, { useEffect, useState } from "react";
// import StickyBox from "react-sticky-box";
// import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import profilelogo from "../../../assets/img/profile-pro.png"
// import styled from "styled-components";

// const SidebarContainer = styled.div`
//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: ${props => (props.isOpen ? '0' : '-260px')};
//     width: 260px;
//     height: 100%;
//     background: #fff;
//     z-index: 1000;
//     transition: left 0.3s ease-in-out;
//   }
// `;

// const Backdrop = styled.div`
//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 999;
//   }
// `;

// const ToggleButton = styled.button`
//   position: fixed;
//   top: 130px;
//   left: 320px;
//   z-index: 11000;
//   background: linear-gradient(135deg, #6e8efb, #a777e3);
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   font-size: 1.5rem;
//   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
//   transition: all 0.3s ease-in-out;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.1) rotate(5deg);
//     box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
//   }

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// // eslint-disable-next-line react/prop-types
// export default function InstructorSidebar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const [profile, setProfile] = useState(null); // State to store profile data
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to manage errors
//   const navigate = useNavigate();

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

//         // Log the response to inspect

//         // Check if the response status is 401
//         if (response.status === 401) {
//           console.error("Token has expired or is invalid");
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//           window.location.href = "/";
//         } else {
//           setProfile(response.data.data);
//         }
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           console.error("Unauthorized, token may be expired");
//           localStorage.removeItem("trainerToken");
//           navigate("/");
//           window.location.href = "/";
//         } else {
//           setError(error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <p>Loading...</p>; // Display a loading message while fetching
//   if (error) return <p>Error: {error.message}</p>; // Display an error message if the fetch fails
//   const handleLogout = () => {
//     localStorage.removeItem("trainerToken");
//     navigate("https://trainers.ultraaura.education/");
//     window.location.href = "https://trainers.ultraaura.education/";
//   };

//   return (
//     <div className="col-xl-3 col-lg-3 theiaStickySidebar">
//       <StickyBox offsetTop={20} offsetBottom={20}>
//         <div className="settings-widget dash-profile">
//           <div className="settings-menu">
//             <div className="profile-bg">
//               <div className="profile-img">
//                 {/* /instructor/instructor-profile */}
//                 <Link to="/instructor/instructor-profiles">
//                   {profile && profile.photo ? (
//                     <img
//                       src={`https://api.novajobs.us${profile.photo}`}
//                       alt="Profile"
//                     />
//                   ) : (
//                     <img src={profilelogo} alt="Default Profile" />
//                   )}
//                 </Link>
//               </div>
//             </div>
//             <div className="profile-group">
//               <div className="profile-name text-center">
//                 <h4>
//                   <Link to="/instructor/instructor-profile">
//                     {profile.first_name} {profile.last_name}
//                   </Link>
//                 </h4>
//                 <p>{profile.jobtitle || "Instructor"}</p>
//                 <Link to="/add-course" className="add-course btn-primary">
//                   Add New Course
//                 </Link>
//                 {/* <Link to="/add-course" className="add-course btn-primary">
//                   watch Tutorial
//                 </Link> */}
//                 <a
//                   href="https://drive.google.com/file/d/19d3qnUE-9brnl7iX-dgQ9V9sxjZL_CO6/view?usp=drive_link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="add-course btn-primary"
//                 >
//                   Watch a 5 minutes video
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="settings-widget account-settings">
//           <div className="settings-menu">
//             <h3>Dashboard</h3>
//             <ul>
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-dashboard"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link
//                   to="/instructor/instructor-dashboard"
//                   className="nav-link"
//                 >
//                   <i className="bx bxs-tachometer" />
//                   Dashboard
//                 </Link>
//               </li>
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-profiles"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link to="/instructor/instructor-profiles" className="nav-link">
//                   <i className="bx bxs-user" />
//                   My Profile
//                 </Link>
//               </li>
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-enrolled-course' ? 'active' : ''}`}>
//                 <Link
//                   to="/instructor/instructor-enrolled-course"
//                   className="nav-link"
//                 >
//                   <i className="bx bxs-graduation" />
//                   My Courses
//                 </Link>
//               </li> */}
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-wishlist' ? 'active' : ''}`}>

//                 <Link to="/instructor/instructor-wishlist" className="nav-link">
//                   <i className="bx bxs-heart" />
//                   Wishlist
//                 </Link>
//               </li> */}
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-reviews"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link to="/instructor/coming-soon" className="nav-link">
//                   <i className="bx bxs-star" />
//                   Reviews
//                 </Link>
//               </li>
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-quiz' || location.pathname === '/instructor/instructor-quiz-details' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-quiz" className="nav-link">
//                   <i className="bx bxs-shapes" />
//                   My Quiz Attempts
//                 </Link>
//               </li> */}
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-orders"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link to="/instructor/coming-soon" className="nav-link">
//                   <i className="bx bxs-cart" />
//                   Order History
//                 </Link>
//               </li>
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-alloted-courses"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link
//                   to="/instructor/instructor-alloted-courses"
//                   className="nav-link"
//                 >
//                   <i className="bx bxs-chat" />
//                   Alloted Courses
//                 </Link>
//               </li>
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-qa' ? 'active' : ''}`}>

//                 <Link to="/instructor/instructor-qa" className="nav-link">
//                   <i className="bx bxs-bookmark-alt" />
//                   Question &amp; Answer
//                 </Link>
//               </li> */}
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-referral' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-referral" className="nav-link">
//                   <i className="bx bxs-user-plus" />
//                   Referrals
//                 </Link>
//               </li> */}
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-chat"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link to="/instructor/coming-soon" className="nav-link">
//                   <i className="bx bxs-chat" />
//                   Messages
//                 </Link>
//               </li>
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/schedule-live-class"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link to="/instructor/schedule-live-class" className="nav-link">
//                   <i className="bx bxs-video" />
//                   Schedule Live Classes
//                 </Link>
//               </li>
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-notifications' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-notifications" className="nav-link">
//                   <i className="bx bxs-bell" />
//                   Notifications
//                 </Link>
//               </li> */}
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-ticket' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-ticket" className="nav-link">
//                   <i className="bx bxs-coupon" />
//                   Support Tickets
//                 </Link>
//               </li> */}
//             </ul>
//             {/* <h3>Instructor</h3> */}
//             <ul>
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-course' ? 'active' : ''}`}>
//                   <Link to="/instructor/instructor-course" className="nav-link ">
//                     <i className="bx bxs-rocket" />
//                     My Courses
//                   </Link>
//                 </li> */}
//                 {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-announcement' ? 'active' : ''}`}>

//                   <Link to="/instructor/instructor-announcement" className="nav-link">
//                     <i className="bx bxs-volume-full" />
//                     Announcements
//                   </Link>
//                 </li> */}
//                 {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-withdraw' ? 'active' : ''}`}>

//                   <Link to="/instructor/instructor-withdraw" className="nav-link ">
//                     <i className="bx bxs-wallet" />
//                     Withdrawls
//                   </Link>
//                 </li> */}
//                 {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-quiz-attempts' ? 'active' : ''}`}>
//                   <Link to="/instructor/instructor-quiz-attempts" className="nav-link">
//                     <i className="bx bxs-shapes" />
//                     Quiz Attempts
//                   </Link>
//                 </li> */}
//                 {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-assignment' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-assignment" className="nav-link ">
//                   <i className="bx bxs-file" />
//                   Assignments
//                 </Link>
//               </li> */}
//               {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-earnings' ? 'active' : ''}`}>
//                 <Link to="/instructor/instructor-earnings" className="nav-link">
//                   <i className="bx bxs-badge-dollar" />
//                   Earnings
//                 </Link>
//               </li> */}
//             </ul>
//             <h3>Account Settings</h3>
//             <ul>
//               <li
//                 className={`nav-item ${
//                   location.pathname === "/instructor/instructor-settings" ||
//                   location.pathname ===
//                     "/instructor/instructor-change-password" ||
//                   location.pathname ===
//                     "/instructor/instructor-setting-notifications" ||
//                   location.pathname ===
//                     "/instructor/instructor-setting-withdraw" ||
//                   location.pathname === "/instructor/instructor-delete-account"
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 <Link
//                   to="/instructor/instructor-settings"
//                   className="nav-link "
//                 >
//                   <i className="bx bxs-cog" />
//                   Settings
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link onClick={handleLogout} className="nav-link">
//                   <i className="bx bxs-log-out" />
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </StickyBox>
//       </SidebarContainer>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import profilelogo from "../../../assets/img/profile-pro.png";

const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? "0" : "-260px")};
    width: 260px;
    height: 100%;
    background: #fff;
    z-index: 1000;
    transition: left 0.3s ease-in-out;
  }
`;

const Backdrop = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 130px;
  left: 20px;
  z-index: 11000;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function InstructorSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("trainerToken");

    if (!token) {
      console.error("No token found");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/profile",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("trainerToken");
          navigate("/");
          window.location.href = "/";
        } else {
          setProfile(response.data.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("trainerToken");
          navigate("/");
          window.location.href = "/";
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("trainerToken");
    navigate("https://trainers.ultraaura.education/");
    window.location.href = "https://trainers.ultraaura.education/";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>☰</ToggleButton>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
      <SidebarContainer
        isOpen={isOpen}
        className="col-xl-3 col-lg-3 theiaStickySidebar"
      >
        <StickyBox offsetTop={20} offsetBottom={20}>
          <div className="settings-widget dash-profile">
            <div className="settings-menu">
              <div className="profile-bg">
                <div className="profile-img">
                  <Link to="/instructor/instructor-profiles">
                    {profile && profile.photo ? (
                      <img
                        src={`https://api.novajobs.us${profile.photo}`}
                        alt="Profile"
                      />
                    ) : (
                      <img src={profilelogo} alt="Default Profile" />
                    )}
                  </Link>
                </div>
              </div>
              <div className="profile-group">
                <div className="profile-name text-center">
                  <h4>
                    <Link to="/instructor/instructor-profile">
                      {profile.first_name} {profile.last_name}
                    </Link>
                  </h4>
                  <p>{profile.jobtitle || "Instructor"}</p>
                  <Link to="/add-course" className="add-course btn-primary">
                    Add New Course
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/19d3qnUE-9brnl7iX-dgQ9V9sxjZL_CO6/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="add-course btn-primary"
                  >
                    Watch a 5 minutes video
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-widget account-settings">
            <div className="settings-menu">
              <h3>Dashboard</h3>
              <ul>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/instructor-dashboard"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="/instructor/instructor-dashboard"
                    className="nav-link"
                  >
                    <i className="bx bxs-tachometer" />
                    Dashboard
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/instructor-profiles"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="/instructor/instructor-profiles"
                    className="nav-link"
                  >
                    <i className="bx bxs-user" />
                    My Profile
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/instructor-reviews"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/instructor/coming-soon" className="nav-link">
                    <i className="bx bxs-star" />
                    Reviews
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/instructor-orders"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/instructor/coming-soon" className="nav-link">
                    <i className="bx bxs-cart" />
                    Order History
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname ===
                    "/instructor/instructor-alloted-courses"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="/instructor/instructor-alloted-courses"
                    className="nav-link"
                  >
                    <i className="bx bxs-chat" />
                    Alloted Courses
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/instructor-chat"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/instructor/coming-soon" className="nav-link">
                    <i className="bx bxs-chat" />
                    Messages
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/instructor/schedule-live-class"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="/instructor/schedule-live-class"
                    className="nav-link"
                  >
                    <i className="bx bxs-video" />
                    Schedule Live Classes
                  </Link>
                </li>
              </ul>

              <h3>Account Settings</h3>
              <ul>
                <li
                  className={`nav-item ${
                    location.pathname.startsWith(
                      "/instructor/instructor-settings"
                    ) ||
                    location.pathname.startsWith(
                      "/instructor/instructor-change-password"
                    ) ||
                    location.pathname.startsWith(
                      "/instructor/instructor-setting-notifications"
                    ) ||
                    location.pathname.startsWith(
                      "/instructor/instructor-setting-withdraw"
                    ) ||
                    location.pathname.startsWith(
                      "/instructor/instructor-delete-account"
                    )
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="/instructor/instructor-settings"
                    className="nav-link"
                  >
                    <i className="bx bxs-cog" />
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link">
                    <i className="bx bxs-log-out" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </StickyBox>
      </SidebarContainer>
    </>
  );
}
