import { useFormVisible } from "@/app/store/form-state";
import { Button } from "@/app/ui/button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const CloseForm = () => {
  const closeForm = useFormVisible((state) => state.closeForm);

  return (
    <Button
      variant="icon"
      onClick={closeForm}
      className="peer absolute top-0 right-[-80] z-50 rounded-full bg-amber-50 px-4.5 hover:bg-(--elem-color)"
    >
      <XMarkIcon className="h-6 w-6" />
    </Button>
  );
};
