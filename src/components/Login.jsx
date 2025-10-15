import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constant";

const Login = () => {
  const [email, setEmail] = useState("ranjan@gmail.com");
  const [password, setPassword] = useState("Ranjan@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginListener = async (event) => {
    event.preventDefault();
    try {
      const user = await axios.post(
        API_BASE_URL + "/auth/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(user.data.data));
      return navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <form onSubmit={handleLoginListener}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
