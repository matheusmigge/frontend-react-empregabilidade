import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showInfoAlert(message: string, options?: ToastOptions) {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    ...options,
  });
}
