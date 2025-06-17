import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { BillInterface } from "@/types/bills";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const EditBillSheet = ({
  open,
  handleOpen,
  data,
}: {
  open: boolean;
  handleOpen: (open: boolean) => void;
  data: BillInterface;
}) => {
  return (
    <Sheet open={open} onOpenChange={handleOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="leading-4">Editando {data.title}</SheetTitle>
          <SheetDescription>
            Aqui você pode editar os detalhes da conta selecionada.
          </SheetDescription>
          <Separator />
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="bill-title">Título da Conta</Label>
            <Input
              id="bill-title"
              placeholder="Digite o título da conta"
              defaultValue={data.title}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="bill-due-date">Data de Vencimento</Label>
            <Input id="bill-due-date" type="date" defaultValue={data.dueDate} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="bill-amount">Valor da Conta</Label>
            <Input
              id="bill-amount"
              placeholder="Digite o valor da conta"
              defaultValue={data.amount}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="bill-site">Site da Conta</Label>
            <Input
              id="bill-site"
              placeholder="Digite o site da conta"
              defaultValue={data.uri}
            />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Salvar edição</Button>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default EditBillSheet;
