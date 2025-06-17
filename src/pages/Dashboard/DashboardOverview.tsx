import ChartMonth from '@/components/Dashboard/Overview/ChartMonth'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from 'react-router-dom'

const DashboardOverview = () => {
  return (
    <div className='p-4'>
      
      <section className='flex flex-wrap gap-6 sm:grid sm:grid-cols-2'>
        <Card className='p-4 w-full'>
            <ChartMonth />
        </Card>

        <Card className='p-4 w-full'>
            <h1 className='font-bold'>Meses</h1>

            <Table>
                <TableHeader>
                    <TableHead>Mês</TableHead>
                    <TableHead className='text-right'>Valor</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                        <Link to="month/" className='underline'>Junho</Link>
                        </TableCell>
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
