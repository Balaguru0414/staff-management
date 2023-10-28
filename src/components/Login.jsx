import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#12b5e7] w-screen h-screen flex items-center 
  justify-center"
    >
      <div
        className="flex flex-col items-center justify-center rounded-lg
      h-fit w-[400px] bg-white bg-opacity-80 border border-white"
      >
        <h1 className="flex-1 text-3xl mt-5 mb-7 font-[500] text-[#12b5e7]">
          ADMIN LOGIN
        </h1>
        <form className="flex h-[80%] justify-around flex-col">
          <label className="lable">
            <h1 className="mb-2">
              USER NAME
              <Red />
            </h1>
            <input className="input" type="text" />
          </label>
          <p className="inputError">This field is required</p>

          <label className="lable">
            <h1 className="mb-2">
              PASSWORD
              <Red />
            </h1>
            <input className="input" type="password" />
          </label>
          <p className="inputError">This field is required</p>

          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("../dashboard");
            }}
            className=" mt-4 mb-7 h-10 font-medium bg-[#12b5e7]
          rounded-md text-white border hover:bg-white hover:text-[#12b5e7]
         hover:border-[#12b5e7]"
          >
            SUBMIT
          </button>

          <div className="flex justify-end mb-5">
            <Link
              className=" text-[14px] p-2 rounded-md bg-white text-[#12b5e7] "
              to="../register"
            >
              Register &rarr;
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

export function Red() {
  return <span className="text-red-400">*</span>;
}
