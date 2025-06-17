import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const ButtonNewBill = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="my-0">
        <Button variant="default" className="mb-4">
          Adicionar Conta
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle>Adicionando uma Nova Conta</DialogTitle>
            <DialogDescription>
              Aqui você pode adicionar uma nova conta. Preencha os detalhes
              necessários e clique em "Salvar" para registrar a conta.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Label htmlFor="bill-title">Título da Conta</Label>
            <Input
              type="text"
              id="bill-title"
              placeholder="Digite o título da conta"
              required
            />
            <Label htmlFor="bill-due-date">Data de Vencimento</Label>
            <Input type="date" id="bill-due-date" required />

            <Label htmlFor="bill-amount">Valor da Conta</Label>
            <Input
              type="number"
              id="bill-amount"
              placeholder="Digite o valor da conta"
              min={0}
              step={0.01}
              required
            />

            <Label htmlFor="bill-amount">Site da Conta</Label>
            <Input
              type="url"
              id="bill-site"
              placeholder="Digite o site onde você pode pagar a conta"
              min={0}
              step={0.01}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ButtonNewBill;
