import BillsTable from "@/components/BillTable/BillsTable";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonNewBill from "@/components/ButtonNewBill";

const DashboardViewMoth = () => {
  return (
    <div className="p-2">

      <p><BreadcrumbComponent /></p>

      <div className="w-full flex items-center justify-end">
        <ButtonNewBill />
      </div>

      <BillsTable />
    </div>
  );
};
export default DashboardViewMoth;
