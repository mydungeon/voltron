import { ToastOptions } from "react-toastify";
import { isRejectedWithValue, isFulfilled } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const options: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

/**
 * Log a warning and show a toast!
 */
export const alertLoggerMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      toast.error(`toast error: ${action.payload.data.message}`, options);
    }
    if (isFulfilled(action)) {
      if (action.payload.message) {
        toast.success(`toast success: ${action.payload.message}`, options);
      }
    }
    return next(action);
  };
