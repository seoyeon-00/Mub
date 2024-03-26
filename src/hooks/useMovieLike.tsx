import { updateLikes } from "@/services/user";
import { useUser } from "./useUser";
import { toast } from "react-hot-toast";
import { useState } from "react";

const useMovieLike = ({ id }: { id: number }) => {
  const user = useUser();
  // checkLikes 상태가 업데이트될 때마다 해당 컴포넌트 리렌더링
  const [checkLikes, setCheckLikes] = useState<boolean>(
    user.user.likes ? user.user.likes.includes(id.toString()) : false
  );

  const likesHandler = async () => {
    let add = user.user.likes || [];
    let message = "";

    if (!checkLikes) {
      add.push(id.toString());
      message = "찜 목록에 추가되었습니다.";
    } else {
      add = add.filter((element: any) => element !== id.toString());
      message = "찜 해제되었습니다.";
    }

    await updateLikes(user.user.id as string, add);
    toast.success(message);
    setCheckLikes(!checkLikes);
  };

  return { checkLikes, likesHandler };
};

export default useMovieLike;
