import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const DialogNewMonth = () => {
  return (
    <Dialog>
      <DialogTrigger>Adicionar Mês</DialogTrigger>
      <DialogContent>
        <form>
          <AlertDialogHeader>
            <DialogTitle>Novo mês planejado</DialogTitle>
            <DialogDescription>
              Aqui você adiciona um novo mês ao seu planejamento. Após a crição,
              você pode adicionar contas ao mês que foi criado.
            </DialogDescription>
            <Separator />

            <Input type="month" className="my-6" required />

            <Separator />

            <DialogFooter>
              <DialogClose>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </AlertDialogHeader>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogNewMonth;
