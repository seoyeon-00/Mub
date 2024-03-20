import useProfileModal from "@/stores/useProfileModal";
import BasicModal from "./BasicModal";
import Button from "./Button";

const ProfileModal = () => {
  const { isOpen, modalClose } = useProfileModal();
  const modalHandler = () => {
    modalClose();
  };

  return (
    <>
      <BasicModal isOpen={isOpen} handleClose={modalHandler}>
        <h2 className="font-semibold text-xl">프로필 변경</h2>
        <div className="flex flex-wrap mt-4 gap-1">
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
          <div className="w-[19%] bg-gray-400 h-[150px]">이미지</div>
        </div>
        <div className="mt-2">
          <Button text="변경" onClick={() => {}} />
        </div>
      </BasicModal>
    </>
  );
};

export default ProfileModal;
