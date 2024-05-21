import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <ToastContainer />
    </>
  );
}

export default App;
