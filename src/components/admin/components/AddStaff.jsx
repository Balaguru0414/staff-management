import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStaff } from "../../../GlobalStore/slices/staffSlice";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [staff, setStaff] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addStaff({
        id: Date.now(),
        name: staff.name,
        email: staff.email,
        phone: staff.phone,
        position: staff.position,
      })
    );

    setStaff({
      name: "",
      email: "",
      phone: "",
      position: "",
    });
    navigate("../dashboard");
    // model();
    alert("NEW STAFF ADDED SUCCESSFULLY");
  };

  return (
    <div className="p-[10px_30px_0px_30px]">
      <div className="flex w-full justify-center">
        <div className="bg-black w-[50%] p-5 rounded-lg">
          <h1 className="mb-7 font-[500] text-white">ADD NEW STAFF</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                required
                name="name"
                className="staffInput"
                placeholder="ENTER NAME"
                type="text"
                onChange={handleChange}
                value={staff.name}
              />
            </label>
            <p className="inputError">This field is required</p>

            <label>
              <input
                required
                name="email"
                className="staffInput"
                placeholder="ENTER EMAIL "
                type="email"
                onChange={handleChange}
                value={staff.email}
              />
            </label>
            <p className="inputError">This field is required</p>

            <label>
              <input
                required
                name="phone"
                className="staffInput"
                placeholder="ENTER PHONE NO"
                type="tel"
                onChange={handleChange}
                value={staff.phone}
              />
            </label>
            <p className="inputError">This field is required</p>

            <select
              name="position"
              value={staff.position}
              required
              className="staffInput"
              onChange={handleChange}
            >
              <Options />
            </select>
            <p className="inputError">This field is required</p>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("../dashboard")}
                className="border-none w-20 font-medium rounded-sm bg-red-500 p-1
           text-white border hover:bg-red-700 mr-2"
              >
                CLOSE
              </button>
              <button
                type="submit"
                className=" border-none w-20 font-medium rounded-sm bg-green-500 p-1
           text-white border hover:bg-green-700"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
        <div>
          <XCircleIcon
            onClick={() => navigate("../dashboard")}
            class="h-8 w-8 cursor-pointer rounded-full ml-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AddStaff;

export function Options() {
  return (
    <>
      <option value="" disabled>
        SELECT POSITION
      </option>
      <option value="FRONT-END">FRONT-END</option>
      <option value="BACK-END">BACK-END</option>
      <option value="FULLSTACK">FULLSTACK</option>
      <option value="PYTHON">PYTHON</option>
      <option value="EMBEDED & IOT">EMBEDED & IOT</option>
      <option value="MACHINE LEARNING">MACHINE LEARNING</option>
      <option value="ARTIFICIAL INTELLIGENCE">ARTIFICIAL INTELLIGENCE</option>
      <option value="ROBOTICS">ROBOTICS</option>
      <option value="FLUTTER">FLUTTER</option>
      <option value="OTHERS">OTHERS</option>
    </>
  );
}
