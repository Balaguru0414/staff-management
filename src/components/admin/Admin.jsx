import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div
      className="w-screen h-screen bg-[#12b5e7] flex items-center
   justify-evenly"
    >
      {/* Login */}
      <Link to="login" className="homeButton hover:scale-110">
        <h2 className={`text-2xl font-semibold`}>LOGIN</h2>
      </Link>

      {/* Register */}
      <Link to="register" className="homeButton hover:scale-110">
        <h2 className={`text-2xl font-semibold`}>REGISTER</h2>
      </Link>
    </div>
  );
};

export default Admin;
