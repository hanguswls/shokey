import useModalStore from "../store/useModalStore";

function useModal() {
  const { isOpen, setIsOpen } = useModalStore();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return ({
    isOpen,
    openModal,
    closeModal
  })
}

export default useModal;