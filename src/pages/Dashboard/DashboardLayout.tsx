import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarApp from "../SidebarApp";
import { Input } from "@/components/ui/input";
import ButtonProfile from "@/components/ui/button-profile";
import ButtonNotifications from "@/components/ui/button-notifications";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full">
      <SidebarProvider defaultOpen={true}>
        <SidebarApp />
        <main className="w-full">
          <div
            id="navbar"
            className="w-full p-2  flex flex-row justify-between items-center shadow-xs"
          >
            <SidebarTrigger />

            <Input
              type="text"
              placeholder="Procurar"
              className="w-sm bg-white hidden sm:inline-block"
            />

            <div>
              <ButtonNotifications />
              <ButtonProfile />
            </div>
          </div>
          

          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};
export default DashboardLayout;
