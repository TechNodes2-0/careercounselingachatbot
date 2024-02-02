const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-fixed bg-center bg-cover flex-center bg-primary-50 bg-dotted-pattern">
      {children}
    </div>
  );
};

export default Layout;
