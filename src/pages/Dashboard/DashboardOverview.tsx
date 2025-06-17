import ChartMonth from "@/components/Dashboard/Overview/ChartMonth";
import TableMonth from "@/components/Dashboard/Overview/TableMonth";
import { Card } from "@/components/ui/card";

const DashboardOverview = () => {
  return (
    <div className="p-4">
      <section className="flex flex-wrap gap-6 sm:grid sm:grid-cols-2">
        <Card className="p-4 w-full">
          <ChartMonth />
        </Card>

        <Card className="p-4 w-full">
          <h1 className="font-bold">Meses</h1>
          <TableMonth />
        </Card>
      </section>
    </div>
  );
};

export default DashboardOverview;
