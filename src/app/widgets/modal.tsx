"use client";

import clsx from "clsx";
import { useFormVisible } from "../store/form-state";
import { Form } from "../features/form/form";

export const Modal = () => {
  const visible = useFormVisible((state) => state.visible);
  const closeForm = useFormVisible((state) => state.closeForm);

  return (
    <div
      className={clsx({
        "fixed inset-0 z-40 flex items-center justify-center bg-gray-900/50 transition-opacity":
          visible,
        hidden: !visible,
      })}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeForm();
      }}
    >
      <Form />
    </div>
  );
};
