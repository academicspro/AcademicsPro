


const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1  overflow-auto  ">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 bg-gray-100 flex flex-col gap-2  w-full ">
        <div className="flex gap-2">

          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;