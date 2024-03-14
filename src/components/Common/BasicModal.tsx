import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface BasicModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const BasicModal = ({ isOpen, handleClose, children }: BasicModalProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#242424",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default BasicModal;
