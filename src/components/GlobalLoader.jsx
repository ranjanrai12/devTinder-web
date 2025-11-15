import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const loading = useSelector((state) => state.loader.loading);

  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default GlobalLoader;
