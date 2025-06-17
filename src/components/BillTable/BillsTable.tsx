import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import ButtonMenuBill from "./ButtonMenuBill";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const BillsTable = () => {
  const contas = [
    {
      id: "INV001",
      title: "Conta de Luz",
      dueDate: "2025-10-15",
      paid: false,
      amount: 250.0,
      uri: "https://example.com/invoice/inv001.pdf",
    },
    {
      id: "INV002",
      title: "Conta de Água",
      dueDate: "2025-10-20",
      paid: true,
      amount: 150.0,
      uri: "https://example.com/invoice/inv001.pdf",
    },
    {
      id: "INV003",
      title: "Internet",
      dueDate: "2025-10-25",
      paid: false,
      amount: 99.99,
      uri: "https://example.com/invoice/inv001.pdf",
    },
  ];
  return (
    <Table>
      <TableCaption>Fim da lista de contas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Vencimento</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contas.map((conta) => (
          <TableRow key={conta.id}>
            <TableCell>
              <span>{conta.title}</span>
              <Button variant="ghost" className="h-fit w-fit p-0">
                <ExternalLink
                  size={14}
                  className="inline-block text-sky-700 cursor-pointer"
                />
              </Button>
            </TableCell>
            <TableCell>{conta.dueDate}</TableCell>
            <TableCell>
              <Badge className="bg-emerald-500">
                {conta.paid ? "Pago" : "Pendente"}
              </Badge>
            </TableCell>
            <TableCell>{conta.amount}</TableCell>
            <TableCell className="w-[50px]">
              <ButtonMenuBill dataBill={conta} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default BillsTable;
