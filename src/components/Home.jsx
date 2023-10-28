import { UserPlusIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-[#12b5e7]  flex items-center
     justify-evenly"
    >
      {/* ADMIN */}
      <Link to="admin" className="homeButton hover:scale-110">
        <h2 className={`text-3xl font-semibold`}>ADMIN</h2>
        <UserPlusIcon class="h-11 w-11" />
      </Link>

      {/* STAFF */}
      <Link to="staff" className="homeButton hover:scale-110">
        <h2 className={`text-3xl font-semibold`}>STAFF</h2>
        <UserGroupIcon class="h-11 w-11" />
      </Link>
    </div>
  );
}
