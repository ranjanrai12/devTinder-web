import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(API_BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0)
    return (
      <div className="flex items-center justify-center text-gray-500 text-lg mt-12">
        No Connections Found
      </div>
    );

  return (
    <div className="bg-base-200">
      <div className="mx-auto bg-base-100 rounded-2xl p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-primary px-3">
          Your Connections
        </h2>

        <ul className="divide-y divide-gray-200">
          {connections.map((user) => (
            <li
              key={user._id}
              className="flex flex-col gap-4 py-4 hover:bg-base-200 rounded-xl px-3 sm:px-4 transition"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="avatar">
                  <div className="w-16 sm:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img src={user.photoUrl} alt={user.firstName} />
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
                <div className="flex space-x-2 ml-auto">
                  <Link to={`/chat/${user._id}`}>
                    <button className="btn btn-sm btn-outline btn-secondary">
                      Message
                    </button>
                  </Link>
                  {/* <button className="btn btn-sm btn-outline">View</button> */}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connections;
