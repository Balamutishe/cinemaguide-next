import { create } from "zustand";

interface FormState {
  visible: boolean;
  openForm: () => void;
  closeForm: () => void;
}

export const useFormVisible = create<FormState>()((set) => ({
  visible: false,
  openForm: () => set({ visible: true }),
  closeForm: () => set({ visible: false }),
}));
