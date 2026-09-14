import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdatedUser() {
  const queryClient = useQueryClient();
  const { mutate: updatedUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User updated successfully");
      queryClient.setQueryData(["user"], user);
    },

    onError: (err) => toast.error(err.message),
  });

  return { updatedUser, isUpdating };
}
