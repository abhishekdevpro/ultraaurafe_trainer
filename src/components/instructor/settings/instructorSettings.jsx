import React, { useState, useEffect } from "react";
import InstructorSidebar from "../sidebar";
import Footer from "../../footer";
// import SettingsPageHeader from "./settingsPageHeader";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InstructorHeader } from "../header";
import FullPageLoader from "../../home/FullPageLoader";
import { User16 } from "../../imagepath";

const InstructorSettings = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    biography: "",
    headline: "",
    jobtitle: "",
    website: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    country_id: "",
    state_id: "",
    city_id: "",
    photo: null,
    phone: "",
  });

  const [initialFormData, setInitialFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [photoPreview, setPhotoPreview] = useState("");
  // const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchCountries();
  }, []);

  useEffect(() => {
    if (formData.country_id) {
      fetchStates(formData.country_id);
    }
  }, [formData.country_id]);

  useEffect(() => {
    if (formData.state_id) {
      fetchCities(formData.state_id);
    }
  }, [formData.state_id]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/profile",
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
          },
        }
      );
      const data = response.data.data;
      setFormData(response.data.data);
      setInitialFormData(response.data.data);
      // setPreviewImage(response.data.data.photo);
      if (data.photo) {
        setPhotoPreview(`https://api.novajobs.us${data.photo}`);
      }
    } catch (error) {
      setError("Error fetching user data.");
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/countries",
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
          },
        }
      );
      setCountries(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/stats/${countryId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
          },
        }
      );
      setStates(response.data.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/cities/${stateId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
          },
        }
      );
      setCities(response.data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for the phone field
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // removes non-digit characters
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     photo: file,
  //   }));

  //   // Create a preview of the selected image

  //   if (file) {
  //     setPreviewImage(file);
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       setPhotoPreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formDataToSend = new FormData();
    let hasChanges = false;

    for (const key in formData) {
      if (key !== "photo" && formData[key] !== initialFormData[key]) {
        formDataToSend.append(key, formData[key]);
        hasChanges = true;
      }
    }

    if (formData.photo instanceof File) {
      formDataToSend.append("photo", formData.photo);
      hasChanges = true;
    }

    if (!hasChanges) {
      setLoading(false);
      setSuccess("No changes to update.");
      return;
    }

    try {
      await axios.patch(
        "https://api.novajobs.us/api/trainers/update-trainer-profile",
        formDataToSend,
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Profile updated successfully.");
      toast.success("Profile updated successfully.");
      setInitialFormData({ ...formData, photo: null });
      fetchUserData(); // refresh updated profile
    } catch (error) {
      setError(
        "Error updating profile: " +
          (error.response?.data?.message || error.message)
      );
      toast.error("Error updating profile");
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(null);

  //   const formDataToSend = new FormData();
  //   let hasChanges = false;

  //   for (const key in formData) {
  //     if (formData[key] !== initialFormData[key]) {
  //       formDataToSend.append(key, formData[key]);
  //       hasChanges = true;
  //     }
  //   }
  //   // Append photo file separately if it exists
  //   // if (previewImage) {
  //   //   formData.append("photo", previewImage);
  //   // }
  //   if (formData.photo instanceof File) {
  //     formDataToSend.append("photo", formData.photo);
  //     hasChanges = true;
  //   }

  //   if (!hasChanges) {
  //     setLoading(false);
  //     setSuccess("No changes to update.");
  //     return;
  //   }

  //   try {
  //     await axios.patch(
  //       "https://api.novajobs.us/api/trainers/update-trainer-profile",
  //       formDataToSend,
  //       {
  //         headers: {
  //           Authorization: `${localStorage.getItem("trainerToken")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     setSuccess("Profile updated successfully.");
  //     toast.success("Profile updated successfully.");
  //     setInitialFormData({ ...formData, photo: null });
  //     fetchUserData(); // Refresh the user data to show the updated photo
  //   } catch (error) {
  //     setError(
  //       "Error updating profile: " +
  //         (error.response?.data?.message || error.message)
  //     );
  //     toast.error("Error updating profile");
  //     console.error("Error updating profile:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  console.log(error);
  console.log(success);
  return (
    <>
      <div className="main-wrapper">
        <InstructorHeader activeMenu={"Settings"} />

        <div className="breadcrumb-bar breadcrumb-bar-info ">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Settings</h2>
                  {/* <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Schedule Class
                    </li>
                  </ol>
                </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <InstructorSidebar />
              <div className="col-xl-9 col-lg-9">
                <div className="settings-widget card-details">
                  <div className="settings-menu p-0">
                    <div className="profile-heading">
                      <h3>Settings</h3>
                      <p>
                        You have full control to manage your own account
                        settings
                      </p>
                    </div>
                    {/* <SettingsPageHeader /> */}
                    {loading && <FullPageLoader />}
                    {/* {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>} */}
                    <form onSubmit={handleSubmit}>
                      <div className="course-group profile-upload-group mb-0 d-flex">
                        <div className="course-group-img d-flex align-items-center">
                          <a href="/instructor/instructor-profiles">
                            {/* <img
                              src={photoPreview || formData.photo}
                              alt=""
                              className="img-fluid"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            /> */}
                            <img
                              src={photoPreview || User16}
                              alt="Profile"
                              className="img-fluid"
                            />
                          </a>
                          <div className="course-name">
                            <h4>Your avatar</h4>
                            <p>
                              PNG or JPG no bigger than 800px wide and tall.
                            </p>
                          </div>
                        </div>
                        <div className="profile-share d-flex align-items-center justify-content-center">
                          <input
                            type="file"
                            name="photo"
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{ display: "none" }}
                            id="photo-upload"
                          />
                          <label
                            htmlFor="photo-upload"
                            className="btn btn-primary"
                          >
                            Change Avatar
                          </label>
                        </div>
                      </div>
                      <div className="checkout-form settings-wrap">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Headline</label>
                              <input
                                type="text"
                                className="form-control"
                                name="headline"
                                value={formData.headline}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Job Title</label>
                              <input
                                type="text"
                                className="form-control"
                                name="jobtitle"
                                value={formData.jobtitle}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Website</label>
                              <input
                                type="text"
                                className="form-control"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Twitter</label>
                            <input
                              type="text"
                              className="form-control"
                              name="twitter"
                              value={formData.twitter}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div> */}
                          {/* <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Facebook</label>
                            <input
                              type="text"
                              className="form-control"
                              name="facebook"
                              value={formData.facebook}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div> */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">LinkedIn</label>
                              <input
                                type="text"
                                className="form-control"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Country</label>
                              <select
                                className="form-select"
                                name="country_id"
                                value={formData.country_id}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                  <option key={country.id} value={country.id}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">State</label>
                              <select
                                className="form-select"
                                name="state_id"
                                value={formData.state_id}
                                onChange={handleInputChange}
                              >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                  <option key={state.id} value={state.id}>
                                    {state.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">City</label>
                              <select
                                className="form-select"
                                name="city_id"
                                value={formData.city_id}
                                onChange={handleInputChange}
                              >
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                  <option key={city.id} value={city.id}>
                                    {city.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Biography</label>
                              <textarea
                                className="form-control"
                                name="biography"
                                value={formData.biography}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">
                              Update Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InstructorSettings;
