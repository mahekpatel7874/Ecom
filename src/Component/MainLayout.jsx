const MainLayout = ({ children }) => {
  return (
    <div
      className={
        "w-full h-screen justify-center items-center flex bg-neutral-100"
      }
    >
      <div
        className={"w-full sm:max-w-full lg:max-w-[1000px] xl:max-w-[1200px]"}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
