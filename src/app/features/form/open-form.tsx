"use client";

import { useFormVisible } from "@/app/store/form-state";
import { Button } from "@/app/ui/button";

export const OpenForm = () => {
  const openForm = useFormVisible((state) => state.openForm);

  return (
    <Button
      variant="header"
      className="w-min border-b-2 border-b-transparent hover:border-b-2 hover:border-(--elem-color)"
      onClick={openForm}
    >
      Войти
    </Button>
  );
};
