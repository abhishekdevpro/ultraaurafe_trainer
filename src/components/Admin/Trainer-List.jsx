
// // import React, { useState, useEffect } from 'react';
// // import styled from 'styled-components';
// // import axios from 'axios';
// // import Footer from "../footer";
// // import { AdminHeader } from "./AdminHeader";
// // import AdminSidebar from "./AdminSidebar";

// // const Wrapper = styled.div`
// //   padding: 1rem;
// //   @media (min-width: 768px) {
// //     padding: 1.5rem;
// //   }
// //   @media (min-width: 1024px) {
// //     padding: 2rem;
// //   }
// // `;

// // const Card = styled.div`
// //   background: white;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   overflow: hidden;
// // `;

// // const CardHeader = styled.div`
// //   padding: 1rem;
// //   border-bottom: 1px solid #e0e0e0;
// // `;

// // const CardTitle = styled.h3`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   margin: 0;
// // `;

// // const CardContent = styled.div`
// //   padding: 1rem;
// // `;

// // const TableWrapper = styled.div`
// //   overflow-x: auto;
// // `;

// // const Table = styled.table`
// //   width: 100%;
// //   border-collapse: collapse;
// // `;

// // const Th = styled.th`
// //   background-color: #f2f2f2;
// //   padding: 12px;
// //   text-align: left;
// //   border-bottom: 2px solid #ddd;
// // `;

// // const Td = styled.td`
// //   padding: 12px;
// //   border-bottom: 1px solid #ddd;
// // `;
// // const Button = styled.button`
// //   background-color: ${props => props.active ? '#4CAF50' : '#f44336'};
// //   color: white;
// //   border: none;
// //   padding: 8px 16px;
// //   text-align: center;
// //   text-decoration: none;
// //   display: inline-block;
// //   font-size: 14px;
// //   margin: 4px 2px;
// //   cursor: pointer;
// //   border-radius: 4px;
// // `;

// // const TrainerList = () => {
// //   const [trainers, setTrainers] = useState([]);
// //   const token = localStorage.getItem('adminToken');

// //   useEffect(() => {
// //     const fetchTrainers = async () => {
// //       try {
// //         const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
// //           headers: {
// //             Authorization: `${token}`
// //           }
// //         });
// //         setTrainers(response.data.data);
// //       } catch (error) {
// //         console.error('Error fetching trainers:', error);
// //       }
// //     };

// //     fetchTrainers();
// //   }, []);

// //   return (
// //     <div className="main-wrapper">
// //       <AdminHeader />
// //       <div className="breadcrumb-bar breadcrumb-bar-info">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-12 col-12">
// //               <div className="breadcrumb-list">
// //                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
// //                 <nav aria-label="breadcrumb" className="page-breadcrumb">
// //                 </nav>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="page-content">
// //         <div className="container">
// //           <div className="row">
// //             <AdminSidebar />
// //             <div className="col-xl-9 col-lg-9">
// //               <Wrapper>
// //                 <Card>
// //                   <CardHeader>
// //                     <CardTitle>Trainer List</CardTitle>
// //                   </CardHeader>
// //                   <CardContent>
// //                     <TableWrapper>
// //                       <Table>
// //                         <thead>
// //                           <tr>
// //                             <Th>Name</Th>
// //                             <Th>Email</Th>
// //                             <Th>Phone Number</Th>
// //                             <Th>Created At</Th>
// //                             <Th>Actions</Th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {trainers.map(({ trainer }) => (
// //                             <tr key={trainer.id}>
// //                               <Td>{`${trainer.first_name} ${trainer.last_name}`}</Td>
// //                               <Td>{trainer.email}</Td>
// //                               <Td>{trainer.phone}</Td>
// //                               <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
// //                               <Td>
// //                         <Button
                         
// //                         >
// //                           Deactivate
// //                         </Button>
// //                       </Td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </Table>
// //                     </TableWrapper>
// //                   </CardContent>
// //                 </Card>
// //               </Wrapper>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default TrainerList;

// // import React, { useState, useEffect } from 'react';
// // import styled from 'styled-components';
// // import axios from 'axios';
// // import Footer from "../footer";
// // import { AdminHeader } from "./AdminHeader";
// // import AdminSidebar from "./AdminSidebar";
// // import { Link } from 'react-router-dom';

// const Wrapper = styled.div`
//   padding: 1rem;
//   @media (min-width: 768px) {
//     padding: 1.5rem;
//   }
//   @media (min-width: 1024px) {
//     padding: 0 2rem;
//   }
// `;

// const Card = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// const CardHeader = styled.div`
//   padding: 1rem;
//   border-bottom: 1px solid #e0e0e0;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin: 0;
// `;

// const CardContent = styled.div`
//   padding: 1rem;
// `;

// const TableWrapper = styled.div`
//   overflow-x: auto;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const Th = styled.th`
//   background-color: #f2f2f2;
//   padding: 12px;
//   text-align: left;
//   border-bottom: 2px solid #ddd;
// `;

// const Td = styled.td`
//   padding: 12px;
//   border-bottom: 1px solid #ddd;
// `;

// const Button = styled.button`
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 14px;
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 4px;
// `;

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const PageButton = styled.button`
//   background-color: ${props => props.active ? '#4CAF50' : '#f1f1f1'};
//   color: ${props => props.active ? 'white' : 'black'};
//   border: 1px solid #ddd;
//   padding: 8px 16px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 14px;
//   margin: 0 4px;
//   cursor: pointer;
//   border-radius: 4px;

//   &:hover {
//     background-color: ${props => props.active ? '#45a049' : '#ddd'};
//   }

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }
// `;

// // const TrainerList = () => {
// //   const [allTrainers, setAllTrainers] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const token = localStorage.getItem('adminToken');
// //   const trainersPerPage = 10;

// //   useEffect(() => {
// //     const fetchTrainers = async () => {
// //       try {
// //         const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
// //           headers: {
// //             Authorization: `${token}`
// //           }
// //         });
// //         setAllTrainers(response.data.data);
// //       } catch (error) {
// //         console.error('Error fetching trainers:', error);
// //       }
// //     };

// //     fetchTrainers();
// //   }, [token]);

// //   const indexOfLastTrainer = currentPage * trainersPerPage;
// //   const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
// //   const currentTrainers = allTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
// //   const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

// //   const handlePageChange = (newPage) => {
// //     setCurrentPage(newPage);
// //   };

// //   return (
// //     <div className="main-wrapper">
// //       <AdminHeader />
// //       <div className="breadcrumb-bar breadcrumb-bar-info">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-12 col-12">
// //               <div className="breadcrumb-list">
// //                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
// //                 <nav aria-label="breadcrumb" className="page-breadcrumb">
// //                 </nav>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="page-content">
// //         <div className="container">
// //           <div className="row">
// //             <AdminSidebar />
// //             <div className="col-xl-9 col-lg-9">
// //               <Wrapper>
// //                 <Card>
// //                   <CardHeader>
// //                     <CardTitle>Trainer List</CardTitle>
// //                   </CardHeader>
// //                   <CardContent>
// //                     <TableWrapper>
// //                       <Table>
// //                         <thead>
// //                           <tr>
// //                             <Th>Name</Th>
// //                             <Th>Email</Th>
// //                             <Th>Phone Number</Th>
// //                             <Th>Created At</Th>
// //                             <Th>Actions</Th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {currentTrainers.map(({ trainer }) => (
// //                             <tr key={trainer.id}>
                             
// //                              <Td>
// //                              <Link to={`/instructor/instructor-profile/${trainer.id}`}>
// //                               {`${trainer.first_name} ${trainer.last_name}`}
// //                              </Link>
                               
// //                               </Td>
// //                               <Td>{trainer.email}</Td>
// //                               <Td>{trainer.phone}</Td>
// //                               <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
// //                               <Td>
// //                                 <Button>
// //                                   Deactivate
// //                                 </Button>
// //                               </Td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </Table>
// //                     </TableWrapper>
// //                     <PaginationWrapper>
// //                       <PageButton 
// //                         onClick={() => handlePageChange(currentPage - 1)} 
// //                         disabled={currentPage === 1}
// //                       >
// //                         Previous
// //                       </PageButton>
// //                       {[...Array(totalPages).keys()].map((page) => (
// //                         <PageButton
// //                           key={page + 1}
// //                           onClick={() => handlePageChange(page + 1)}
// //                           active={currentPage === page + 1}
// //                         >
// //                           {page + 1}
// //                         </PageButton>
// //                       ))}
// //                       <PageButton 
// //                         onClick={() => handlePageChange(currentPage + 1)} 
// //                         disabled={currentPage === totalPages}
// //                       >
// //                         Next
// //                       </PageButton>
// //                     </PaginationWrapper>
// //                   </CardContent>
// //                 </Card>
// //               </Wrapper>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default TrainerList;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Footer from "../footer";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// // ... (previous styled components remain unchanged)

// const ActionButton = styled(Button)`
//   background-color: ${props => props.isActive ? '#f44336' : '#4CAF50'};
  
//   &:hover {
//     background-color: ${props => props.isActive ? '#d32f2f' : '#45a049'};
//   }
// `;

// const TrainerList = () => {
//   const [allTrainers, setAllTrainers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const token = localStorage.getItem('adminToken');
//   const trainersPerPage = 10;

//   useEffect(() => {
//     fetchTrainers();
//   }, [token]);

//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       setAllTrainers(response.data.data);
//     } catch (error) {
//       console.error('Error fetching trainers:', error);
//     }
//   };

//   // const toggleTrainerStatus = async (trainerId, currentStatus) => {
//   //   const url = currentStatus
//   //     ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${trainerId}`
//   //     : `https://api.novajobs.us/api/uaadmin/trainer-active/${trainerId}`;

//   //   try {
//   //     await axios.get(url, {
//   //       headers: {
//   //         Authorization: `${token}`
//   //       }
//   //     });
//   //     // Refresh the trainer list after status change
//   //     fetchTrainers();
//   //   } catch (error) {
//   //     console.error('Error toggling trainer status:', error);
//   //   }
//   // };
//   const toggleTrainerStatus = async (trainerId, currentStatus) => {
//     const url = currentStatus
//       ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${trainerId}`
//       : `https://api.novajobs.us/api/uaadmin/trainer-active/${trainerId}`;

//     try {
//       await axios.get(url, {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
      
//       toast.success(`Trainer ${currentStatus ? 'deactivated' : 'activated'} successfully!`);
      
//       fetchTrainers();
//     } catch (error) {
//       console.error('Error toggling trainer status:', error);
//       toast.error('Error toggling trainer status. Please try again.');
//     }
// };
//   const indexOfLastTrainer = currentPage * trainersPerPage;
//   const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
//   const currentTrainers = allTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
//   const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="main-wrapper">
//       <AdminHeader />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         {/* ... (breadcrumb content remains unchanged) */}
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <AdminSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <Wrapper>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Trainer List</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <TableWrapper>
//                       <Table>
//                         <thead>
//                           <tr>
//                             <Th>Name</Th>
//                             <Th>Email</Th>
//                             <Th>Phone Number</Th>
//                             <Th>Created At</Th>
//                             <Th>Status</Th>
//                             <Th>Actions</Th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {currentTrainers.map(({ trainer }) => (
//                             <tr key={trainer.id}>
//                               <Td>
//                                 <Link to={`/instructor/instructor-profile/${trainer.id}`}>
//                                   {`${trainer.first_name} ${trainer.last_name}`}
//                                 </Link>
//                               </Td>
//                               <Td>{trainer.email}</Td>
//                               <Td>{trainer.phone}</Td>
//                               <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
//                               <Td>{trainer.is_active===1 ? 'Active' : 'Inactive'}</Td>
//                               <Td>
//                                 <ActionButton
//                                   isActive={trainer.is_active}
//                                   onClick={() => toggleTrainerStatus(trainer.id, trainer.is_active)}
//                                 >
//                                   {trainer.is_active === 1 ? 'Deactivate' : 'Activate'}
//                                 </ActionButton>
//                               </Td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                     </TableWrapper>
//                     <PaginationWrapper>
//                       <PageButton 
//                         onClick={() => handlePageChange(currentPage - 1)} 
//                         disabled={currentPage === 1}
//                       >
//                         Previous
//                       </PageButton>
//                       {[...Array(totalPages).keys()].map((page) => (
//                         <PageButton
//                           key={page + 1}
//                           onClick={() => handlePageChange(page + 1)}
//                           active={currentPage === page + 1}
//                         >
//                           {page + 1}
//                         </PageButton>
//                       ))}
//                       <PageButton 
//                         onClick={() => handlePageChange(currentPage + 1)} 
//                         disabled={currentPage === totalPages}
//                       >
//                         Next
//                       </PageButton>
//                     </PaginationWrapper>
//                   </CardContent>
//                 </Card>
//               </Wrapper>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TrainerList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import Footer from "../footer";

// const TrainerList = () => {
//   const [allTrainers, setAllTrainers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [selectedtrainer, setSelectedtrainer] = useState(null);
//   const token = localStorage.getItem("adminToken");
//   const coursesPerPage = 15;

//   useEffect(() => {
//     fetchCourses();
//   }, [token]);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/uaadmin/trainers",
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );
//       setAllTrainers(response.data.data);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       toast.error("Error fetching courses. Please try again.");
//     }
//   };

//   const handleActivateDeactivate = (trainer) => {
//     setSelectedtrainer(trainer);
//     setShowConfirmModal(true);
//   };

//   const confirmActivateDeactivate = async () => {
//     if (!selectedtrainer) return;

//     const url = selectedtrainer.is_active
//       ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${selectedtrainer.trainer.id}`
//       : `https://api.novajobs.us/api/uaadmin/trainer-active/${selectedtrainer.trainer.id}`;

//     try {
//       await axios.get(url, {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       toast.success(
//         `Trainers ${
//           selectedtrainer.is_active ? "deactivated" : "activated"
//         } successfully!`
//       );

//       setAllTrainers((prevCourses) =>
//         prevCourses.map((trainer) =>
//           trainer.id === selectedtrainer.id
//             ? { ...trainer, is_active: !trainer.is_active }
//             : trainer
//         )
//       );
//     } catch (error) {
//       console.error("Error activating/deactivating Trainers:", error);
//       toast.error("Error activating/deactivating Trainers. Please try again.");
//     }
//     setShowConfirmModal(false);
//   };

//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentTrainer = allTrainers.slice(
//     indexOfFirstCourse,
//     indexOfLastCourse
//   );
//   const totalPages = Math.ceil(allTrainers.length / coursesPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

 
//   return (
//     <div className="main-wrapper">
//       <AdminHeader />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <AdminSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <div className="card">
//                 <div className="card-header">
//                   <h5 className="card-title">Course List</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center mb-0">
//                       <thead>
//                         <tr>
//                           <th>Name</th>
//                           <th>Email</th>
//                           <th>Phone number</th>
//                           <th>Created At</th>
//                           <th>Status</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {currentTrainer.map((trainer) => (
//                           <tr key={trainer.id}>
//                             <td>
//                               <Link to={`/instructor/instructor-profile/${trainer.id}`}>
//                               {`${trainer.trainer.first_name} ${trainer.trainer.last_name}`}
//                               </Link>
//                             </td>
//                             <td>{trainer.trainer.email}</td>
//                             <td>{trainer.trainer.phone}</td>
//                             <td>
//                               {new Date(trainer.trainer.created_at).toLocaleDateString()}
//                             </td>
//                             <td>{trainer.trainer.is_active ? "Active" : "Inactive"}</td>
//                             <td>
//                               <div className="actions d-flex gap-2">
//                                 <button
//                                   className={`btn btn-sm ${
//                                     trainer.trainer.is_active
//                                       ? "btn-danger"
//                                       : "btn-success"
//                                   }`}
//                                   onClick={() =>
//                                     handleActivateDeactivate(trainer)
//                                   }
//                                 >
//                                   {trainer.trainer.is_active ? "Deactivate" : "Activate"}
//                                 </button>
                               
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//                 <div className="card-footer">
//                   <nav aria-label="Page navigation">
//                     <ul className="pagination justify-content-center">
//                       <li
//                         className={`page-item ${
//                           currentPage === 1 ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => handlePageChange(currentPage - 1)}
//                         >
//                           Previous
//                         </button>
//                       </li>
//                       {[...Array(totalPages).keys()].map((page) => (
//                         <li
//                           key={page + 1}
//                           className={`page-item ${
//                             currentPage === page + 1 ? "active" : ""
//                           }`}
//                         >
//                           <button
//                             className="page-link"
//                             onClick={() => handlePageChange(page + 1)}
//                           >
//                             {page + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li
//                         className={`page-item ${
//                           currentPage === totalPages ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => handlePageChange(currentPage + 1)}
//                         >
//                           Next
//                         </button>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />

//       <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Action</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to{" "}
//           {selectedtrainer?.is_active ? "deactivate" : "activate"} this Trianer?
//         </Modal.Body>
//         <Modal.Footer>
//           <button
//             className="btn btn-secondary"
//             onClick={() => setShowConfirmModal(false)}
//           >
//             Cancel
//           </button>
//           <button
//             className="btn btn-primary"
//             onClick={confirmActivateDeactivate}
//           >
//             Confirm
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default TrainerList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";

const TrainerList = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const token = localStorage.getItem("adminToken");
  const trainersPerPage = 15;

  useEffect(() => {
    fetchTrainers();
  }, [token]);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/trainers",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllTrainers(response.data.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      toast.error("Error fetching trainers. Please try again.");
    }
  };

  const handleActivateDeactivate = (trainer) => {
    setSelectedTrainer(trainer);
    setShowConfirmModal(true);
  };

  const confirmActivateDeactivate = async () => {
    if (!selectedTrainer) return;

    const url = selectedTrainer.trainer.is_active
      ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${selectedTrainer.trainer.id}`
      : `https://api.novajobs.us/api/uaadmin/trainer-active/${selectedTrainer.trainer.id}`;

    try {
      await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success(
        `Trainer ${
          selectedTrainer.trainer.is_active ? "deactivated" : "activated"
        } successfully!`
      );

      setAllTrainers((prevTrainers) =>
        prevTrainers.map((trainer) =>
          trainer.trainer.id === selectedTrainer.trainer.id
            ? { ...trainer, trainer: { ...trainer.trainer, is_active: !trainer.trainer.is_active } }
            : trainer
        )
      );
    } catch (error) {
      console.error("Error activating/deactivating Trainer:", error);
      toast.error("Error activating/deactivating Trainer. Please try again.");
    }
    setShowConfirmModal(false);
  };

  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = allTrainers.slice(
    indexOfFirstTrainer,
    indexOfLastTrainer
  );
  const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main-wrapper">
      <AdminHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Admin Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <AdminSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Trainer List</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone number</th>
                          <th>Created At</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTrainers.map((trainerData) => (
                          <tr key={trainerData.trainer.id}>
                            <td>
                              <Link to={`/instructor/instructor-profile/${trainerData.trainer.id}`}>
                                {`${trainerData.trainer.first_name} ${trainerData.trainer.last_name}`}
                              </Link>
                            </td>
                            <td>{trainerData.trainer.email}</td>
                            <td>{trainerData.trainer.phone}</td>
                            <td>
                              {new Date(trainerData.trainer.created_at).toLocaleDateString()}
                            </td>
                            <td>{trainerData.trainer.is_active ? "Active" : "Inactive"}</td>
                            <td>
                              <div className="actions d-flex gap-2">
                                <button
                                  className={`btn btn-sm ${
                                    trainerData.trainer.is_active
                                      ? "btn-danger"
                                      : "btn-success"
                                  }`}
                                  onClick={() =>
                                    handleActivateDeactivate(trainerData)
                                  }
                                >
                                  {trainerData.trainer.is_active ? "Deactivate" : "Activate"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages).keys()].map((page) => (
                        <li
                          key={page + 1}
                          className={`page-item ${
                            currentPage === page + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(page + 1)}
                          >
                            {page + 1}
                          </button>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to{" "}
          {selectedTrainer?.trainer.is_active ? "deactivate" : "activate"} this Trainer?
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={confirmActivateDeactivate}
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrainerList;