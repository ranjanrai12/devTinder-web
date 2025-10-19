import axios from "axios";
import React, { useEffect } from "react";
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
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No Connections Found
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Your Connections
        </h2>

        <ul className="divide-y divide-gray-200">
          {connections.map((user) => (
            <li
              key={user._id}
              className="flex items-center justify-between py-4 hover:bg-base-200 rounded-lg px-3 transition"
            >
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img
                      src={user.photoUrl || "/assets/default-avatar.png"}
                      alt={user.firstName}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {user.about || "No bio yet."}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.skills?.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="badge badge-sm badge-outline badge-primary"
                      >
                        {skill}
                      </span>
                    ))}
                    {user.skills?.length > 3 && (
                      <span className="badge badge-sm badge-ghost">
                        +{user.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="btn btn-sm btn-outline btn-primary">
                  Message
                </button>
                <button className="btn btn-sm btn-outline">View</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connections;
