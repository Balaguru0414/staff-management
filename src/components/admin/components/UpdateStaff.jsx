import { useNavigate, useParams } from "react-router-dom";
import { Options } from "./AddStaff";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateAStaff } from "../../../GlobalStore/slices/staffSlice";

const UpdateStaff = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const staffs = useSelector((state) => state.staff.staffs);
  const { name, email, phone, position } = staffs.find(
    (staff) => staff.id == id
  );
  const [sname, setsname] = useState(name);
  const [semail, setsemail] = useState(email);
  const [sphone, setsphone] = useState(phone);
  const [sposition, setsposition] = useState(position);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateAStaff({
        id: id,
        name: sname,
        email: semail,
        phone: sphone,
        position: sposition,
      })
    );
    alert("UPDATED SUCCESSFULLY");
    navigate("../dashboard");
  };
  return (
    <div className="p-[10px_30px_0px_30px]">
      <div className="flex w-full justify-center">
        <div className="bg-black w-[50%] p-5 rounded-lg">
          <h1 className="mb-7 font-[500] text-white">UPDATE STAFF</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                required
                className="staffInput"
                placeholder="ENTER NAME"
                value={sname}
                onChange={(e) => setsname(e.target.value)}
                type="text"
              />
            </label>
            <p className="inputError">This field is required</p>

            <label>
              <input
                className="staffInput"
                placeholder="ENTER EMAIL "
                type="email"
                value={semail}
                onChange={(e) => setsemail(e.target.value)}
              />
            </label>
            <p className="inputError">This field is required</p>

            <label>
              <input
                className="staffInput"
                placeholder="ENTER PHONE NO"
                type="tel"
                value={sphone}
                onChange={(e) => setsphone(e.target.value)}
              />
            </label>
            <p className="inputError">This field is required</p>

            <select
              value={sposition}
              onChange={(e) => setsposition(e.target.value)}
              className="staffInput"
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
                UPDATE
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

export default UpdateStaff;
