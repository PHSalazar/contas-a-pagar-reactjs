import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArchiveX, Download } from "lucide-react";

const ReportsHistory = () => {
  const history = [
    { title: "Relatório 1", date: Date.now() },
    { title: "Relatório 2", date: Date.now() },
    { title: "Relatório 3", date: Date.now() },
  ];
  return (
    <Card className="p-4">
      <h1 className="font-bold">Relatórios</h1>
      <h2>Aqui você encontra uma lista dos últimos relatórios gerados.</h2>

      <Table>
        <TableHeader>
          <TableHead>Relatório</TableHead>
          <TableHead>Data</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableHeader>
        <TableBody>
          {history.map(({ title, date }, index) => (
            <TableRow key={index}>
              <TableCell>{title}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  title={`Baixar ${title}`}
                >
                  <Download />
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer ml-1"
                  title={`Remover '${title}' da lista`}
                >
                  <ArchiveX />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ReportsHistory;
