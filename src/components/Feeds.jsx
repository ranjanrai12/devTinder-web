import { useSelector, useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Feeds = () => {
  const userFeeds = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeeds = async () => {
    if (userFeeds) return;
    try {
      const userFeedResponse = await axiosInstance.get("/user/feed");
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
      <div className="mt-20 flex items-center justify-center text-gray-500 text-lg">
        No Feeds Found
      </div>
    );

  return (
    <div className="bg-base-200 md:p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {userFeeds.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
