import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { BillInterface } from "@/types/bills";

const AlertDialogDeleteBill = ({
  open,
  handleOpen,
  data,
}: {
  open: boolean;
  handleOpen: (open: boolean) => void;
  data: BillInterface;
}) => {
  return (
    <AlertDialog open={open} onOpenChange={handleOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remover "{data.title}"?</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja remover esta conta? Esta ação não pode ser
            desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Remover</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default AlertDialogDeleteBill;
