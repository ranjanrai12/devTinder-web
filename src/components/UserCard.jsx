const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, bio, photoUrl } = user;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      <figure className="px-8 pt-8">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={photoUrl}
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

        {bio && (
          <p className="text-gray-500 text-sm mt-2 px-4">
            {bio.length > 80 ? bio.slice(0, 80) + "..." : bio}
          </p>
        )}

        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-sm w-28">Send Request</button>
          <button className="btn btn-outline btn-sm w-24">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
