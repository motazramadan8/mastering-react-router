import { Outlet } from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import Navbar from "../../components/Navbar";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <LearnAside />
      <Outlet />
    </>
  );
};

export default LearnLayout;
