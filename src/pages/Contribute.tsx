import { useLocation } from "react-router-dom";

const ContributePage = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2>Contribute Page</h2>
      <h3>Email: {state.email}</h3>
    </div>
  );
};

export default ContributePage;
