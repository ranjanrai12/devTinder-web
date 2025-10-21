import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleErrorChange = async (value) => {
    setError(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // LOGIN request
        const user = await axios.post(
          `${API_BASE_URL}/auth/login`,
          { email, password },
          { withCredentials: true }
        );
        dispatch(addUser(user.data.data));
        navigate("/");
      } else {
        // SIGNUP request
        const user = await axios.post(
          `${API_BASE_URL}/auth/signup`,
          {
            firstName,
            lastName,
            email,
            password,
            age: userAge,
          },
          { withCredentials: true }
        );
        dispatch(addUser(user.data.data));
        dispatch(navigate("/profile"));
      }
    } catch (error) {
      console.log("error", error);
      await handleErrorChange(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-2">
            {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            {isLogin
              ? "Login to continue to your account"
              : "Sign up to get started!"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Show name fields only for signup */}
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={userAge}
                    required
                    onChange={(e) => setUserAge(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error py-2 text-sm">
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button className={`btn btn-primary w-full }`} type="submit">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>

          {/* Switch between Login / Signup */}
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-primary font-medium hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-primary font-medium hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
