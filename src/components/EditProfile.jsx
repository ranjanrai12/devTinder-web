import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const EditProfile = ({ userData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // initialize the user state
  const [user, setUser] = useState(userData);
  const [skillInput, setSkillInput] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  /**
   * @method handleChange
   * @description handle input change, update the user state
   * @param {*} e
   * @returns {void}
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "about" && value.length > 200) return;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * @method handleImageChange
   * @description handle image change, update the user state
   * @returns {void}
   * @param {*} e
   */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({
        ...prev,
        photoFile: file, // actual file to upload
        photoUrl: URL.createObjectURL(file), // for preview
      }));
    }
  };
  /**
   * @method handleSubmit
   * @description handle form submit, update the user state
   * @param {*} e
   */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append normal fields
      formData.append("firstName", user.firstName);
      formData.append("lastName", user.lastName);
      formData.append("age", user.age);
      formData.append("gender", user.gender);
      formData.append("about", user.about);
      user.skills.forEach((skill) => formData.append("skills[]", skill));

      // Append image only if updated
      if (user.photoFile) {
        formData.append("photoUrl", user.photoFile);
      }
      const response = await axios.patch(
        API_BASE_URL + "/profile/edit",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(addUser({ ...response.data.data, email: user.email }));
      navigate("/");
    } catch (err) {
      console.log("Error:", err);
    }
  };
  /**
   * @method handleSkillKeyDown
   * @description handle skill input and add skill to the user state
   * @param {*} e
   */
  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!user?.skills?.includes(skillInput.trim())) {
        setUser((prev) => ({
          ...prev,
          skills: [...(prev?.skills || []), skillInput.trim()],
        }));
      }
      setSkillInput("");
    }
  };
  /**
   * @method removeSkill
   * @description remove skill from the user state
   * @param {*} skillToRemove
   */
  const removeSkill = (skillToRemove) => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="bg-base-100 p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center space-y-3">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user.photoFile
                      ? user.photoUrl
                      : `${API_BASE_URL}${user.photoUrl}`
                  }
                  alt="Profile"
                />
              </div>
            </div>
            <label className="btn btn-sm btn-outline">
              Change Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Age</span>
              </label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </select>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="label">
              <span className="label-text font-medium">About</span>
            </label>
            <textarea
              name="about"
              value={user.about || ""}
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-24"
              placeholder="Tell something about yourself..."
              maxLength={200}
            ></textarea>
            <p className="text-sm text-gray-500 text-right">
              {user.about?.length || 0}/200 characters
            </p>
          </div>

          {/* Skills */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Skills</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {user.skills &&
                user.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="badge badge-primary badge-lg gap-2 py-3 px-4"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-1 text-xs text-white hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillKeyDown}
              placeholder="Type a skill and press Enter"
              className="input input-bordered w-full"
            />
          </div>

          {/* Save Button */}
          <div className="flex gap-4 justify-center text-center pt-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsPreviewOpen(true)}
            >
              Preview
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Profile Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-base-100 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Profile Preview
            </h3>
            <UserCard user={user} shouldShowAction={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
