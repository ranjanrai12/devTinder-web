import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      const res = await axiosInstance.get("/user/request/received");
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      await axiosInstance.post("/request/review/" + status + "/" + _id, {});
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0)
    return (
      <div className="flex items-center justify-center text-gray-500 text-lg mt-12">
        No Requests Found
      </div>
    );

  return (
    <div className="bg-base-200">
      <div className="mx-auto bg-base-100 md:shadow-md rounded-2xl p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-primary px-3">
          Requests Received
        </h2>

        <ul className="divide-y divide-gray-200">
          {requests.map((req) => {
            const user = req.fromUserId;
            return (
              <li
                key={req._id}
                className="flex flex-col gap-4 py-4 hover:bg-base-200 rounded-xl px-3 sm:px-4 transition"
              >
                {/* Left Section */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="avatar">
                    <div className="w-16 sm:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                      <img src={`${user.photoUrl}`} alt={user.firstName} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {user.about || "No bio yet."}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap sm:justify-start gap-1 mt-2">
                    {user.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="badge badge-sm badge-outline badge-primary px-2 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Section (Buttons) */}
                <div className="flex justify-center sm:justify-end gap-2 mt-2 sm:mt-0 ml-auto">
                  <button
                    className="btn btn-sm btn-error btn-outline w-24 sm:w-auto"
                    onClick={() => reviewRequest("rejected", req._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-sm btn-success w-24 sm:w-auto"
                    onClick={() => reviewRequest("accepted", req._id)}
                  >
                    Accept
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
