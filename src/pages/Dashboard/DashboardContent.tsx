import BillsTable from "@/components/BillTable/BillsTable";
import ButtonNewBill from "@/components/ButtonNewBill";

const DashboardContent = () => {
  return (
    <div className="p-2">
      <div className="w-full flex items-center justify-end">
        <ButtonNewBill />
      </div>

      <BillsTable />
    </div>
  );
};
export default DashboardContent;
