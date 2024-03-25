import { updateLikes } from "@/services/user";
import { useUser } from "./useUser";
import { toast } from "react-hot-toast";

const useMovieLike = ({ id }: { id: number }) => {
  const user = useUser();
  const checkLikes = user.user.likes
    ? user.user.likes.includes(id.toString())
    : false;

  const likesHandler = async () => {
    let add = user.user.likes || [];
    let message = "";

    if (!checkLikes) {
      add.push(id.toString());
      message = "좋아요";
    } else {
      add = add.filter((element: any) => element !== id.toString());
      message = "좋아요 해제되었습니다.";
    }

    await updateLikes(user.user.id as string, add);
    toast.success(message);
  };

  return { checkLikes, likesHandler };
};

export default useMovieLike;
