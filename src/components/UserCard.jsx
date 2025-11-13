import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, shouldShowAction = true }) => {
  const { _id, firstName, lastName, age, gender, about, photoUrl, skills } =
    user;
  const dispatch = useDispatch();

  const sendAndIgnoreRequestHandler = async (status, userId) => {
    try {
      await axios.post(
        `${API_BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-64">
        <img
          src={`${API_BASE_URL}${photoUrl}`}
          alt={`${firstName} ${lastName}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>

        <div className="absolute bottom-3 left-4 text-white">
          <h2 className="text-lg sm:text-xl font-bold drop-shadow">
            {firstName} {lastName}
          </h2>
          <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm">
            {age && (
              <span className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs">
                Age: {age}
              </span>
            )}
            {gender && (
              <span className="bg-secondary/90 text-white px-2 py-1 rounded-full capitalize text-xs">
                {gender}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col">
        {/* Skills */}
        <div className="p-1 flex flex-wrap gap-2">
          {skills?.map((skill, i) => (
            <span
              key={i}
              className="badge badge-sm badge-outline badge-primary px-2 py-3 text-md"
            >
              {skill}
            </span>
          ))}
        </div>
        {about ? (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {about}
          </p>
        ) : (
          <p className="text-gray-400 italic text-sm">No bio available</p>
        )}

        {/* Action Buttons */}
        {shouldShowAction && (
          <div className="flex justify-between gap-3 mt-5 w-full">
            <button
              className="btn btn-outline btn-sm sm:btn-md flex-1 max-w-[120px]"
              onClick={() => sendAndIgnoreRequestHandler("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary btn-sm sm:btn-md flex-1 max-w-[140px]"
              onClick={() => sendAndIgnoreRequestHandler("interested", _id)}
            >
              Send Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
