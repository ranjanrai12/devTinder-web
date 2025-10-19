import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { API_BASE_URL } from "../utils/constant";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(API_BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No Requests Found
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-md rounded-2xl p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-primary text-center sm:text-left">
          Requests Received
        </h2>

        <ul className="divide-y divide-gray-200">
          {requests.map((req) => {
            const user = req.fromUserId;
            return (
              <li
                key={req._id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 hover:bg-base-200 rounded-xl px-3 sm:px-4 transition"
              >
                {/* Left Section */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="avatar">
                    <div className="w-16 sm:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                      <img
                        src={user.photoUrl || "/assets/default-avatar.png"}
                        alt={user.firstName}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center sm:text-left">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left mt-1">
                      {user.about || "No bio yet."}
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-1 mt-2">
                      {user.skills?.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="badge badge-sm badge-outline badge-primary px-2 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Section (Buttons) */}
                <div className="flex justify-center sm:justify-end gap-2 mt-2 sm:mt-0">
                  <button className="btn btn-sm btn-success w-24 sm:w-auto">
                    Accept
                  </button>
                  <button className="btn btn-sm btn-error btn-outline w-24 sm:w-auto">
                    Reject
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Requests;
