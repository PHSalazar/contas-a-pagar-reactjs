import { Route, Routes } from "react-router-dom";
import DashboardViewMoth from "./DashboardViewMoth";
import DashboardLayout from "./DashboardLayout";
import DashboardOverview from "./DashboardOverview";

function DashboardPage() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="month" element={<DashboardViewMoth />} />
      </Route>
    </Routes>
  );
}
export default DashboardPage;
