import { Route, Routes } from "react-router-dom";
import DashboardViewMoth from "./DashboardViewMoth";
import DashboardLayout from "./DashboardLayout";

function DashboardPage() {
  return (
    // <DashboardLayout>
    //   {/* <DashboardContent /> */}
    //   <Routes>
    //     <Route path="/" element={<DashboardContent />} />
    //   </Routes>
    // </DashboardLayout>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="month" element={<DashboardViewMoth />} />
      </Route>
    </Routes>
  );
}
export default DashboardPage;
