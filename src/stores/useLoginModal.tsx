import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

const useLoginModal = create<ModalStore>((set) => ({
  isOpen: false,
  modalOpen: () => set({ isOpen: true }),
  modalClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
