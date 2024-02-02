const Layout = ({ children }) => {
  return (
    <div className="items-center w-full min-h-screen ml-[500px] mt-[100px] bg-fixed bg-center bg-cover flex-center bg-primary-50 bg-dotted-pattern">
      {children}
    </div>
  );
};

export default Layout;
