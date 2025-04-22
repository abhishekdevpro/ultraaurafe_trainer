// import React, { useState, useEffect } from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../../instructor/header";
import InstructorSidebar from "../sidebar";
import { useNavigate, useParams } from "react-router-dom";
import CourseTable from "./CourseList";
import styled from "styled-components";
// import axios from 'axios';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  padding: 2rem;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const DashboardCard = styled.div`
  background: linear-gradient(135deg, #ffe6f0, #e6f0ff);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  color: #333;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1.3rem;
    margin: 1rem 0 0.5rem;
    color: #007bff;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    min-width: 80%;
    scroll-snap-align: start;
    flex: 0 0 auto;
  }
`;

const CardButton = styled.button`
  background-color:rgb(83, 88, 143); /* Hot pink */
  color: rgb(255, 255, 255); /* Hot pink */;
  padding: 10px 20px;
  border:2px
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(171, 32, 32);
  }
`;
export const Dashboard = () => {
  const { id } = useParams();
  console.log(id, "trainer id");
  const navigate = useNavigate();
  

  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Dashboard"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-4">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
              
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
            <DashboardGrid>
  <DashboardCard>
    <i className="bx bxs-dashboard fa-2x"></i>
    <h3>Dashboard</h3>
    <p>Admin overview panel</p>
    <CardButton onClick={() => navigate("/instructor/instructor-dashboard")}>
      Go to Dashboard
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-user fa-2x"></i>
    <h3>My Profile</h3>
    <p>Manage your instructor profile</p>
    <CardButton onClick={() => navigate("/instructor/instructor-profiles")}>
      View Profile
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-star fa-2x"></i>
    <h3>Reviews</h3>
    <p>Manage student reviews</p>
    <CardButton onClick={() => navigate("/instructor/coming-soon")}>
      Go to Reviews
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-cart fa-2x"></i>
    <h3>Order History</h3>
    <p>Track student orders</p>
    <CardButton onClick={() => navigate("/instructor/coming-soon")}>
      View Orders
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-chat fa-2x"></i>
    <h3>Check Messages</h3>
    <p>Check and open your messages</p>
    <CardButton onClick={() => navigate("/instructor/coming-soon")}>
      Open Messages
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-video fa-2x"></i>
    <h3>Schedule Live Classes</h3>
    <p>Plan your next sessions</p>
    <CardButton onClick={() => navigate("/instructor/schedule-live-class")}>
      Schedule Now
    </CardButton>
  </DashboardCard>
</DashboardGrid>

              <CourseTable />
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
export default Dashboard;