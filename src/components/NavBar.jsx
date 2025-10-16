import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constant";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post(
        API_BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      removeUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>
      {user && (
        <div className="dropdown dropdown-end">
          <span>Welcome {user.firstName}</span>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-5"
          >
            <div className="w-10 rounded-full">
              <img alt="user image" src={user.photoUrl} />
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={logoutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
