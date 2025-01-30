import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gauth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to extract query parameters from the URL
    const getQueryParams = (url) => {
      const params = new URLSearchParams(new URL(url).search);
      return Object.fromEntries(params.entries());
    };

    // Extract the code from the URL
    const queryParams = getQueryParams(window.location.href);
    const code = queryParams.code;

    if (code) {
      // Send the code to the API endpoint
      const sendAuthCode = async () => {
        try {
          const response = await axios.get(
            `https://api.novajobs.us/api/trainers/auth/callback?code=${code}`
          );
          const token = response.data.data.token;

          // Save the token in localStorage
          localStorage.setItem("trainerToken", token);
          console.log(response);
          // navigate('/dashboard')

          // Redirect to the success URL with the token
          navigate("/instructor/instructor-dashboard");
        } catch (error) {
          console.error("Error while sending auth code:", error);

          // Redirect to the login page on error
          navigate("/login");
        } finally {
          setLoading(false); // Stop the loader
        }
      };

      sendAuthCode();
    } else {
      console.error("Code parameter is missing in the URL");
      setLoading(false);
      navigate(""); // Redirect to the login page if code is missing
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading, please wait...</p>
        </div>
      ) : (
        <div className="text-gray-600">Redirecting...</div>
      )}
    </div>
  );
};

export default Gauth;
