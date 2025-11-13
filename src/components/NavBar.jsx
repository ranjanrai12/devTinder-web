import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { removeAllFeed } from "../utils/feedSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post(
        API_BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(removeAllFeed());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="navbar bg-base-300 shadow-sm sticky top-0 z-50 px-4">
      <div className="flex-1">
        <Link to={"/"} className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-primary-content"
              >
                {/* Binary 0 (left top) */}
                <circle cx="7" cy="7" r="2" />
                {/* Binary 1 (right top) */}
                <rect x="15" y="5" width="1.5" height="4" rx="0.75" />
                {/* Binary 0 (right bottom) */}
                <circle cx="17" cy="17" r="2" />
                {/* Binary 1 (left bottom) */}
                <rect x="7" y="15" width="1.5" height="4" rx="0.75" />
                {/* Connection lines - perfectly centered */}
                <path
                  d="M9.5 7L14.5 7M9.5 17L14.5 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Central connection dot */}
                <circle cx="12" cy="12" r="1" className="fill-current" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevMatches
          </span>
        </Link>
      </div>
      {user && (
        <div className="dropdown dropdown-end">
         <span className="hidden md:inline text-sm font-medium text-gray-600">
            Welcome, <span className="text-primary font-semibold">{user.firstName}</span>
          </span>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-5"
          >
            <div className="w-10 rounded-full">
              <img alt="user image" src={`${user.photoUrl}`} />
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/connections"}>Connections</Link>
            </li>
            <li>
              <Link to={"/requests"}>Requests</Link>
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
