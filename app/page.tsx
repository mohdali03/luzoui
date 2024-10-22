import Sidebar from "@/components/Sidebar";

import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <div className="w-full">
      
      <div className="flex bg-gray-200">
        <Sidebar />
        <RightSide/>
      </div>
    </div>
  );
}
