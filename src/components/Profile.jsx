import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userData = useSelector((state) => state.user);

  return userData && <EditProfile userData={userData} />;
};

export default Profile;
