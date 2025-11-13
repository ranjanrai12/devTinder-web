import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Feeds = () => {
  const userFeeds = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeeds = async () => {
    if (userFeeds) return;
    try {
      const userFeedResponse = await axios.get(API_BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(userFeedResponse?.data?.data));
    } catch (err) {
      if (err.status === 401) navigate("/login");
    }
  };
  useEffect(() => {
    getFeeds();
  }, []);

  if (!userFeeds || userFeeds.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No Feeds Found
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {userFeeds.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
