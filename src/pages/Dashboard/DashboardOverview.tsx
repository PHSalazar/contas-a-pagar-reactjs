import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Calendar, DollarSign, FileCheck, History } from 'lucide-react'
import React from 'react'

const DashboardOverview = () => {
  return (
    <div className='p-4'>
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

      <section className='grid grid-cols-2 gap-6'>
        <Card className='p-4'>
            Olá
        </Card>

        <Card className='p-4'>
            <h1 className='font-bold'>Meses</h1>

            <Table>
                <TableHeader>
                    <TableHead>Mês</TableHead>
                    <TableHead className='text-right'>Valor</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Junho</TableCell>
                        <TableCell className='text-right'>R$ 989,99</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Julho</TableCell>
                        <TableCell className='text-right'>R$ 989,99</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Agosto</TableCell>
                        <TableCell className='text-right'>R$ 989,99</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Setembro</TableCell>
                        <TableCell className='text-right'>R$ 989,99</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
      </section>
    </div>
  )
}

export default DashboardOverview
