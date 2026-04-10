import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;