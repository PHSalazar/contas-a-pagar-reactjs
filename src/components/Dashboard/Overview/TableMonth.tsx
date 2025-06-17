import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import DialogNewMonth from "./DialogNewMonth";

const TableMonth = () => {
  return (
    <>
      <Table>
        <TableCaption className="text-right">
          <Button>
            <DialogNewMonth />
          </Button>
        </TableCaption>
        <TableHeader>
          <TableHead>Mês</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link to="month/" className="underline">
                Junho
              </Link>
            </TableCell>
            <TableCell className="text-right">R$ 989,99</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Julho</TableCell>
            <TableCell className="text-right">R$ 989,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Agosto</TableCell>
            <TableCell className="text-right">R$ 989,99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Setembro</TableCell>
            <TableCell className="text-right">R$ 989,99</TableCell>
          </TableRow>
        </TableBody>
      </Table>{" "}
    </>
  );
};

export default TableMonth;
