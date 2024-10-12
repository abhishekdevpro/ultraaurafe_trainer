import React, { useState } from "react";
import Header from "../header";
import {
  // bannerimg,
  Become1,
  Become2,
  // CertificateIcon,
  // CourseIcon,
  // GratuateIcon,
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  Join,
  // PencilIcon,
  Share,
} from "../imagepath";
import { useSelector } from "react-redux";
// import Loginbg from "../../assets/img/banner.png";
// import TrendingCourse from "./slider/trendingCourse";
import Companies from "./slider/companies";
// import BgBanner1 from "../../assets/img/bg-banner-01.png";
// import BgBanner2 from "../../assets/img/bg-banner-02.png";
// import Loginbg from "../../assets/img/banner.png";
// import UserLove from "../../assets/img/user-love.jpg";
//import Blog from "./slider/blog";
import Footer from "../footer";
// import Testimonial from "./slider/testimonial";
import Select from "react-select";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturedCourses from "./FeaturedCourses";
// import { useNavigate } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PartnerList from "./PartnerList";
import SubHeader from "../header/Sub-header";
import home from './home-bg2.png'
// import HomePage from "./HeroSection.jsx";
// Container for the search bar
const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

// Form inner styling
const FormInner = styled.div`
  padding: 12px;
  background-color: #fff;
  border-radius: 35px;
  width: 100%;
  border: 0;
  max-width: 740px;

  @media (max-width: 768px) {
    border-radius: 25px;
  }
`;

// Input group styling
const InputGroup = styled.div`
  background: #fff;
  border-radius: 130px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row; /* Ensure elements stay in one row */

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 50px;
    padding-left: 8px;
  }
`;

// Select component wrapper

// Button styling
const SearchButton = styled.button`
  background: #f66962;
  border-radius: 50px;
  font-weight: bold;
  border: 1px solid #f66962;
  font-size: 18px;
  padding: 10px 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  margin-left: 0.5rem;

  &:hover,
  &:focus {
    background: #fc7f50;
    border-color: #fc7f50;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

// Search icon styling (hidden on mobile)
const SearchIcon = styled.i`
  display: flex;
  align-items: center;
  color: #f66962;
  padding-right: 10px;

  @media (max-width: 768px) {
    display: none; /* Hide search icon on mobile */
  }
`;

// Arrow icon replaced with search icon on mobile

// Input field styling
const InputField = styled.input`
  background: #fff;
  border-radius: 40px;
  border: 0;
  height: 44px;
  color: #000;
  font-size: 16px;
  margin-right: 10px;
  flex-grow: 2;

  &::placeholder {
    color: #a2a2a2;
  }
`;

// Form container
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BannerContent = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;

const customSelectStyles = {
  container: (base) => ({
    ...base,
    width: "200px",
    padding: "5px",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 10000,
  }),
  control: (base) => ({
    ...base,
    borderRadius: "40px",
    border: "1px solid #ddd",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#f66962",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#a2a2a2",
  }),
};

export const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // State for the search input
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [levelOptions, setLevelOptions] = useState([]);
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate
  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
  // const formatValue = (value) => `${Math.floor(value)}`;
  // const navigate = useNavigate();
  const animatedText = [
    "Career",
    "Development",
    "Growth",
    "Learning",
    "Certifications",
  ]; // Array of texts for animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
console.log(currentTextIndex);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedText.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    console.log(mobileSidebar, "gg");
  }, [mobileSidebar]);

  useEffect(() => {
    // Fetch categories from API
    fetch("https://api.novajobs.us/api/trainers/course-categories")
      .then((response) => response.json())
      .then((data) => {
        const categories = data.data.map((category) => ({
          label: category.name,
          value: category.id,
        }));
        setCategoryOptions(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  useEffect(() => {
    // Fetch levels from API
    fetch("https://api.novajobs.us/api/trainers/course-level")
      .then((response) => response.json())
      .then((data) => {
        const levels = data.data.map((level) => ({
          label: level.name,
          value: level.id,
        }));
        setLevelOptions(levels);
      })
      .catch((error) => {
        console.error("Error fetching levels:", error);
      });
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (searchKeyword) queryParams.append("title_keywords", searchKeyword);
    if (selectedCategory)
      queryParams.append("course_category_id", selectedCategory.value);
    if (selectedLevel)
      queryParams.append("course_level_id", selectedLevel.value);

    navigate(`/course-list?${queryParams.toString()}`); // Use navigate for routing
  };

  // const handleAllCourses = () => {
  //   navigate("/course-list");
  // };

  // const loadChatbot = () => {
  //   // Check if the script is already added to avoid duplicate injections
  //   if (document.getElementById("chatling-embed-script")) return;

  //   // Create and append the chatbot configuration script
  //   const configScript = document.createElement("script");
  //   configScript.type = "text/javascript";
  //   configScript.text = `window.chtlConfig = { chatbotId: "5594648998" };`;
  //   document.body.appendChild(configScript);

  //   // Create and append the chatbot embed script
  //   const embedScript = document.createElement("script");
  //   embedScript.id = "chatling-embed-script";
  //   embedScript.async = true;
  //   embedScript.src = "https://chatling.ai/js/embed.js";
  //   embedScript.onload = () => {
  //     // Optionally, add initialization code here if required
  //     console.log("Chatbot script loaded");
  //   };
  //   embedScript.onerror = () => {
  //     console.error("Failed to load the chatbot script");
  //   };
  //   document.body.appendChild(embedScript);
  // };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <SubHeader />
        {/* banner */}
        {/* <section className="home-slide d-flex align-items-center">
          <div className="container">
            <div className="row ">
              <div className="col-md-8">
                <div className="home-slide-face aos" data-aos="fade-up">
                <h1>Welcome to Ultra Aura</h1>
      <p>
        Where new possibilities become reality every day. Are you ready to
        explore a new opportunity for yourself? Let’s get started.
      </p>
                <section className="section py-5" data-aos="fade-up">
          <div className="container border border-danger">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor cube-instuctor ">
                  <h4>Partner with US</h4>
                  <div className="row">
                    <div className="col-lg-7 col-md-12 ">
                      <div className="top-instructors">
                        <p>
                          Collaborate with UltraAura to expand educational
                          opportunities and make a lasting impact. Partner with
                          us to drive innovation and empower learners worldwide.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link
                            to="/partner-signin"
                            className="btn btn-primary"
                          >
                            Partner with US
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor yellow-mentor">
                  <h4>Transform Access To Education</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Create an account to receive our newsletter, course
                          recommendations and promotions.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link to="/register" className="btn btn-primary">
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                                  </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <img src={home} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
       {/* <section className="home-slide py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="home-slide-face">
          <h1 className="display-4 mb-4">Welcome to Ultra Aura</h1>
          <p className="lead mb-5">
            Where new possibilities become reality every day. Are you ready to
            explore a new opportunity for yourself? Let's get started.
          </p>
          
          <Container>
            <BannerContent>
              <FormContainer action="/course-list">
                <FormInner>
                  <InputGroup>
                    <SearchIcon className="fa-solid fa-magnifying-glass" />
                    <InputField
                      type="text"
                      placeholder="Search Course"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <Select
                      options={categoryOptions}
                      value={selectedCategory}
                      placeholder="Category"
                      onChange={setSelectedCategory}
                      styles={customSelectStyles}
                    />
                    <Select
                      options={levelOptions}
                      value={selectedLevel}
                      placeholder="Levels"
                      onChange={setSelectedLevel}
                      styles={customSelectStyles}
                    />
                    <SearchButton type="button" onClick={handleSearch}>
                      <i className="fas fa-arrow-right" />
                    </SearchButton>
                  </InputGroup>
                </FormInner>
              </FormContainer>
            </BannerContent>
          </Container>

          <div className="row g-4">
            {/* Use d-flex to ensure row items stretch 
            <div className="col-md-6 d-flex">
              <div className="card w-100 shadow-sm" style={{ backgroundColor: '#ffdeda' }}>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Partner with US</h4>
                  <div className="row flex-grow-1">
                    <div className="col-9 d-flex flex-column">
                      <p className="card-text flex-grow-1">
                        Collaborate with UltraAura to expand educational opportunities and make a lasting impact. Partner with us to drive innovation and empower learners worldwide.
                      </p>
                      <div className="mt-auto">
                        <Link to="/partner-signin" className="btn btn-primary">
                          Partner with US
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <img className="img-fluid" alt="Partner illustration" src={Become2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 d-flex">
              <div className="card w-100 shadow-sm" style={{ backgroundColor: '#ffe88f' }}>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Transform Access To Education</h4>
                  <div className="row flex-grow-1">
                    <div className="col-9 d-flex flex-column">
                      <p className="card-text flex-grow-1">
                        Create an account to receive our newsletter, course recommendations and promotions.
                      </p>
                      <div className="mt-auto">
                        <Link to="/register" className="btn btn-primary">
                          Sign up
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <img className="img-fluid" alt="Education illustration" src={Become1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 d-none d-lg-block">
        <div className="girl-slide-img">
          <img src={home} alt="Featured illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section> */}
<section className="home-slide py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="home-slide-face">
        <h1 style={{ fontSize: '36px' }} className="mb-4 text-center font-bold">
  Empower Your Learning Journey
</h1>

        <p className="lead mb-5">
          Join a community of learners and educators committed to your growth and innovation.
          </p>
          
          {/* Your existing Container and form code here */}
          <Container>
            <BannerContent>
              <FormContainer action="/course-list">
                <FormInner>
                  <InputGroup>
                    <SearchIcon className="fa-solid fa-magnifying-glass" />
                    <InputField
                      type="text"
                      placeholder="Search Course"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <Select
                      options={categoryOptions}
                      value={selectedCategory}
                      placeholder="Category"
                      onChange={setSelectedCategory}
                      styles={customSelectStyles}
                    />
                    <Select
                      options={levelOptions}
                      value={selectedLevel}
                      placeholder="Levels"
                      onChange={setSelectedLevel}
                      styles={customSelectStyles}
                    />
                    <SearchButton type="button" onClick={handleSearch}>
                      <i className="fas fa-arrow-right" />
                    </SearchButton>
                  </InputGroup>
                </FormInner>
              </FormContainer>
            </BannerContent>
          </Container>


          <div className="row g-4">
            <div className="col-md-6 d-flex">
              <div className="card w-100 shadow-lg transition-transform hover-lift" 
                   style={{ 
                     backgroundColor: '#ffdeda',
                     transition: 'transform 0.3s ease-in-out',
                     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                   }}>
                <div className="card-body d-flex flex-column p-4">
                  <h4 className="card-title mb-3">Partner with US</h4>
                  <div className="row flex-grow-1">
                    <div className="col-8 d-flex flex-column">
                      <p className="card-text flex-grow-1">
                      Join Ultra Aura to expand educational opportunities, drive innovation, and empower learners globally.
                      </p>
                      <div className="mt-auto">
                        <Link to="/partner-signin" className="btn btn-primary btn-lg">
                          Partner with US
                        </Link>
                      </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                      <img 
                        className="img-fluid rounded transition-transform hover-scale" 
                        alt="Partner illustration" 
                        src={Become2}
                        style={{
                          width: '150px',
                          height: '150px',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 d-flex">
              <div className="card w-100 shadow-lg transition-transform hover-lift"
                   style={{ 
                     backgroundColor: '#ffe88f',
                     transition: 'transform 0.3s ease-in-out',
                     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                   }}>
                <div className="card-body d-flex flex-column p-4">
                  <h4 className="card-title mb-3">Transform Access To Education</h4>
                  <div className="row flex-grow-1">
                    <div className="col-8 d-flex flex-column">
                      <p className="card-text flex-grow-1">
                      Sign up to unlock exclusive updates, personalized course recommendations, and special offers.
                      </p>
                      <div className="mt-auto">
                        <Link to="/register" className="btn btn-primary btn-lg">
                          Sign up
                        </Link>
                      </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                      <img 
                        className="img-fluid rounded transition-transform hover-scale" 
                        alt="Education illustration" 
                        src={Become1}
                        style={{
                          width: '150px',
                          height: '150px',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 d-none d-lg-block">
        <div className="girl-slide-img">
          <img src={home} alt="Featured illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>{`
  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  
  .hover-lift:hover {
    transform: translateY(-10px);
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  .btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
  }
`}</style>
        {/* <HomePage /> */}
        {/* /banner */}

        {/* Home banner bottom */}
        {/* <section className="section student-course">
          <div className="container">
            <div className="course-widget">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius align-items-center aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={PencilIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            {/* <span>10</span>K 
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={10}
                                delay={1}
                                duration={4}
                              /> *
                              100+
                            </span>
                          </h4>
                          <p>Online Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CourseIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp start={0} end={200} delay={1} />+ 
                              50+
                            </span>
                          </h4>
                          <p>Expert Tutors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CertificateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={6}
                                delay={1}
                                duration={5}
                              />
                              K+ 
                              100+
                            </span>
                          </h4>
                          <p>Ceritified Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={GratuateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={60}
                                delay={1}
                                duration={2}
                              />
                              K + 
                              100+
                            </span>
                          </h4>
                          <p>Online Students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Home banner bottom */}

        {/* Top Category with Owl Carousel */}
        {/* <TopCategory /> */}
        {/* Top Category with Owl Carousel */}

        {/* What's new Featured Course */}
        {/* <section className="section new-course">
         
        </section> */}
        <FeaturedCourses />
        {/* What's new Featured Course */}

        {/* Master Skills */}
        <section className="section master-skill">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    <span>What’s New</span>
                    <h2>Master the skills to drive your career</h2>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    of eLearning learners report our hands-on content directly
                    helped their careers.
                  </p>
                </div>
                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon01} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Stay motivated with engaging instructors</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Keep up with in the latest in cloud</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon03} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Get certified with 100+ certification courses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon04} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Build skills your way, from labs to courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-end">
                <div className="career-img aos" data-aos="fade-up">
                  <img src={Join} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Master Skills */}

        {/* Trending Course */}
        {/* <TrendingCourse /> */}
        {/* Trending Course */}

        {/* Share knowledge */}
        <section className="section share-knowledge">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Share} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>Want to share your knowledge? Join us a Trainer</h2>
                  <p>
                    Share your expertise and inspire the next generation by
                    joining UltraAura as an instructor. Shape the future of
                    education with flexible teaching opportunities and a global
                    reach.
                  </p>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Quick Onboarding
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      100% Online platform
                    </li>
                  </ul>
                  <div className="all-btn all-category d-flex align-items-center">
                    <Link to="/login" className="btn btn-primary">
                      Join as Trainer Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section py-5" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor cube-instuctor ">
                  <h4>Partner with US</h4>
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Collaborate with UltraAura to expand educational
                          opportunities and make a lasting impact. Partner with
                          us to drive innovation and empower learners worldwide.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link
                            to="/partner-signin"
                            className="btn btn-primary"
                          >
                            Partner with US
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor yellow-mentor">
                  <h4>Transform Access To Education</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Create an account to receive our newsletter, course
                          recommendations and promotions.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link to="/register" className="btn btn-primary">
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Become a instructor */}
        {/* Companies */}
        <PartnerList />
        <section className="section lead-companies">
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center">
                <span>Trusted By</span>
                <h2>We Work with Some of the Best - Globally</h2>
              </div>
            </div>
            <div className="lead-group aos" data-aos="fade-up">
              <Companies />
            </div>
          </div>
        </section>
        {/* Companies */}

        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </div>
    </>
  );
};

export default Home;
