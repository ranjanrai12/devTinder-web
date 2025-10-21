import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, shouldShowAction = true }) => {
  const { _id, firstName, lastName, age, gender, about, photoUrl } = user;
  const dispatch = useDispatch();

  const sendAndIgnoreRequestHandler = async (status, userId) => {
    try {
      await axios.post(
        API_BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      <figure className="px-8 pt-8">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={`${API_BASE_URL}${photoUrl}`}
              alt={`${firstName} ${lastName}`}
              className="object-cover"
            />
          </div>
        </div>
      </figure>

      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {firstName} {lastName}
        </h2>

        <div className="flex justify-center space-x-3 text-sm text-gray-600">
          {age && (
            <span className="badge badge-outline badge-primary px-3 py-2">
              Age: {age}
            </span>
          )}
          {gender && (
            <span className="badge badge-outline badge-secondary px-3 py-2 capitalize">
              {gender}
            </span>
          )}
        </div>

        {about && (
          <p className="text-gray-500 text-sm mt-2 px-4">
            {about.length > 80 ? about.slice(0, 80) + "..." : about}
          </p>
        )}

        {shouldShowAction && (
          <div className="card-actions mt-4">
            <button
              className="btn btn-primary btn-sm w-28"
              onClick={() => sendAndIgnoreRequestHandler("interested", _id)}
            >
              Send Request
            </button>
            <button
              className="btn btn-outline btn-sm w-24"
              onClick={() => sendAndIgnoreRequestHandler("ignored", _id)}
            >
              Ignore
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
