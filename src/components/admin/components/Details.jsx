import { UserPlusIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { UserMinusIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { deleteStaff } from "../../../GlobalStore/slices/staffSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useState } from "react";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.staff.staffs);
  const [search, setSearch] = useState("");

  return (
    <main className=" flex flex-col w-full ">
      <div className="flex justify-between items-center">
        <input
          className="p-3 mb-5 font-[500] border rounded-md border-[#18404d]
          focus:border-none"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ENTER STAFF NAME"
        />
        <div
          onClick={() => navigate("../add-staff")}
          className="flex cursor-pointer items-center justify-around 
        bg-[#12b5e7] text-white border gap-2 hover:border-[#12b5e7]
      hover:bg-white hover:text-[#12b5e7]  rounded-lg p-3 mb-5"
        >
          <UserPlusIcon className="h-5 w-5 " />
          <h1 className="font-medium">ADD NEW STAFF</h1>
        </div>
      </div>
      <table className="text-center">
        <thead>
          <tr className="">
            <th>S.NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE NO</th>
            <th>POSITION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {staffs
            .filter((staff) => {
              return search.toLowerCase() === ""
                ? staff
                : staff.name.toLowerCase().includes(search) ||
                    staff.email.toLowerCase().includes(search) ||
                    staff.phone.toLowerCase().includes(search);
            })
            .map((staff, i) => (
              <tr key={staff.id}>
                <td>{i + 1}</td>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.phone}</td>
                <td>{staff.position === "" ? "OTHERS" : staff.position}</td>
                <td className="flex border-none justify-around">
                  <button>
                    <PencilSquareIcon
                      onClick={() => navigate(`../update-staff/${staff.id}`)}
                      class="h-8 w-8  p-1 rounded-md hover:scale-110 text-white 
                   bg-neutral-800 hover:bg-green-500"
                    />
                  </button>
                  <button
                    onClick={() => {
                      // const res = confirm(
                      //   "ARE YOU SURE, DO YOU WANT TO REMOVE YOUR STAFF?"
                      // );
                      // res &&
                      dispatch(deleteStaff(staff.id));
                    }}
                  >
                    <UserMinusIcon
                      class="h-8 w-8  p-1 rounded-md hover:scale-110 text-white 
                   bg-neutral-800 hover:bg-red-500"
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex">
        <Pagination />
      </div>
    </main>
  );
};

export default Details;
