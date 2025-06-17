import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./button";
import { User } from "lucide-react";

const buttonProfile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="rounded-full cursor-pointer">
          <User />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <p>
            <i className="text-stone-300">Opção indisponível no momento.</i>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default buttonProfile;
