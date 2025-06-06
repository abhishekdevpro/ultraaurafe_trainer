// import ReactDOM from "react-dom/client";

// //Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// //Font Awesome
// import "./assets/icons/fontawesome/css/fontawesome.min.css";
// import "./assets/icons/fontawesome/css/all.min.css";

// //Box icon
// import "./assets/icons/boxicons/css/boxicons.min.css";
// import "./index.css";

// //CSS
// import "./assets/css/style.css";

// // Feather
// import "./assets/icons/feather/css/iconfont.css"

// import Approuter from "./approuter";
// import { Provider } from "react-redux";
// import store from "./components/common/redux/store.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//   <Provider store={store}>
//     <Approuter />
//     </Provider>
//   </>
// );

import ReactDOM from "react-dom/client";
import { useEffect } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Font Awesome
import "./assets/icons/fontawesome/css/fontawesome.min.css";
import "./assets/icons/fontawesome/css/all.min.css";

// Box icon
import "./assets/icons/boxicons/css/boxicons.min.css";
import "./index.css";

// CSS
import "./assets/css/style.css";

// Feather
import "./assets/icons/feather/css/iconfont.css";

import Approuter from "./approuter";
import { Provider } from "react-redux";
import store from "./components/common/redux/store.jsx";

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

// Inject Google Translate script dynamically
function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,de,es,it,pt,hi,zh-CN,ar",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-widget"
      title="Translate"
    ></div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <GoogleTranslate />
      <Approuter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  </>
);
