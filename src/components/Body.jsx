import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    try {
      const user = await axios.get(API_BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(user.data));
    } catch (error) {
      console.log("error", error);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    !userData && fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
