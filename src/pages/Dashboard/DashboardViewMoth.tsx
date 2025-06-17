import BillsTable from "@/components/BillTable/BillsTable";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonNewBill from "@/components/ButtonNewBill";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, DollarSign, FileCheck, History } from "lucide-react";

const DashboardViewMoth = () => {
  return (
    <div className="p-2 flex flex-col gap-6">

      <p><BreadcrumbComponent /></p>

      <div className='flex flex-wrap gap-5 justify-around'>
        <Card className='p-6 w-full w-[220px] h-fit gap-0 flex flex-row items-center relative overflow-hidden bg-stone-50'>
            <DollarSign size="20" className='bg-stone-100 rounded-full w-[100px] h-[100px] absolute -left-5 -bottom-5 opacity-10' />
            <CardContent className='z-10'>
                <CardTitle className='scroll-m-20 font-extrabold tracking-tight text-balance text-xl '>R$983,99</CardTitle>
                <CardDescription className='font-light'>todas as contas</CardDescription>
            </CardContent>
        </Card>

        <Card className='p-6 w-full w-[220px] h-fit gap-0 flex flex-row items-center relative overflow-hidden bg-red-100'>
            <History size="20" className='text-red-300 rounded-full w-[100px] h-[100px] absolute -left-5 -bottom-5' />
            <CardContent className='z-10'>
                <CardTitle className='scroll-m-20 font-extrabold tracking-tight text-balance text-xl'>R$983,99</CardTitle>
                <CardDescription className='font-light'>todas as contas</CardDescription>
            </CardContent>
        </Card>

        <Card className='p-6 w-full w-[220px] h-fit gap-0 flex flex-row items-center relative overflow-hidden bg-sky-200'>
            <Calendar size="20" className='text-sky-100 rounded-full w-[100px] h-[100px] absolute -left-5 -bottom-5' />
            <CardContent className='z-10'>
                <CardTitle className='scroll-m-20 font-extrabold tracking-tight text-balance text-xl'>R$983,99</CardTitle>
                <CardDescription className='font-light'>contas futuras</CardDescription>
            </CardContent>
        </Card>

        <Card className='p-6 w-full w-[220px] h-fit gap-0 flex flex-row items-center relative overflow-hidden bg-emerald-200'>
            <FileCheck size="20" className='text-emerald-100 rounded-full w-[100px] h-[100px] absolute -left-5 -bottom-5' />
            <CardContent className='z-10'>
                <CardTitle className='scroll-m-20 font-extrabold tracking-tight text-balance text-xl'>R$983,99</CardTitle>
                <CardDescription className='font-light'>contas pagas</CardDescription>
            </CardContent>
        </Card>
      </div>
      
      <Separator className='my-4' />

      <div className="w-full flex items-center justify-end">
        <ButtonNewBill />
      </div>

      <BillsTable />
    </div>
  );
};
export default DashboardViewMoth;
