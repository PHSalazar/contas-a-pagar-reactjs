import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ArchiveX, Edit, MenuIcon } from "lucide-react";
import EditBillSheet from "./EditBillSheet";
import { useState } from "react";
import type { BillInterface } from "@/types/bills";
import AlertDialogDeleteBill from "../AlertDialogDeleteBill";

const ButtonMenuBill = ({ dataBill }: { dataBill: BillInterface }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild className="w-fit">
            <MenuIcon />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setIsEditing(true)}>
              <Edit /> Editar
            </MenubarItem>
            <MenubarItem onClick={() => setIsRemoving(true)}>
              <ArchiveX /> Remover
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <EditBillSheet
        open={isEditing}
        handleOpen={setIsEditing}
        data={dataBill}
      />

      <AlertDialogDeleteBill
        data={dataBill}
        open={isRemoving}
        handleOpen={setIsRemoving}
      />
    </>
  );
};
export default ButtonMenuBill;
