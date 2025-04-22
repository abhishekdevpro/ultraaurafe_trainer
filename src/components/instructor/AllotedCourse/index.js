// import React, { useState, useEffect } from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../../instructor/header";

import InstructorSidebar from "../sidebar";
import { useParams } from "react-router-dom";
import AllotedCourseTable from "./AllotedCourseList";

// import axios from 'axios';

export const AllotedCourses = () => {
  const { id } = useParams();
  console.log(id, "trainer id");
  //   const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"AllotedCourses"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-4">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
                {/* <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Student Dashboard */}

            <div className="col-xl-9 col-lg-9">
              <AllotedCourseTable />
            </div>
            {/* /Student Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};
export default AllotedCourses;
