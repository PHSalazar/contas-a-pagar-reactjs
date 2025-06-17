import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./button";
import { Bell } from "lucide-react";

const buttonNotifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="rounded-full cursor-pointer">
          <Bell />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <p>
            <i className="text-stone-300">Nenhuma notificação.</i>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default buttonNotifications;
