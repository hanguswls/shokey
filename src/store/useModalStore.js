import { create } from 'zustand'

const useModalStore = create(
  (set) => ({
    isOpen: false,
    setIsOpen: (state) => set({ isOpen: state }),
  }),
)

export default useModalStore;