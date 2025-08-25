import { useFormVisible } from "@/app/store/form-state";
import { Button } from "@/app/ui/button";
import Image from "next/image";

export const CloseForm = () => {
  const closeForm = useFormVisible((state) => state.closeForm);

  return (
    <Button
      variant="icon"
      onClick={closeForm}
      className="absolute top-0 right-[-80] rounded-full bg-amber-50 px-4.5"
    >
      <Image src="/images/exit-black.svg" alt="Close" width={24} height={24} />
    </Button>
  );
};
