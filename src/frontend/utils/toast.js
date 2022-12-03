import { toast as toastService } from "react-toastify";

const baseConfig = {
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
};

const toast = {
  ...toastService,
  success: (message, options = {}) =>
    toastService.success(message, { ...baseConfig, ...options }),
  error: (message, options = {}) =>
    toastService.error(message, { ...baseConfig, ...options }),
  info: (message, options = {}) =>
    toastService.info(message, { ...baseConfig, ...options }),
  warning: (message, options = {}) =>
    toastService.warning(message, { ...baseConfig, ...options }),
  update: (toastId, render, options = {}) => {
    if (!options?.isLoading) options.isLoading = false;
    if (!options?.type) options.type = "success";
    return toastService.update(toastId, { ...baseConfig, render, ...options });
  },
  dismiss: (toastId) => toastService.dismiss(toastId),
  loading: (message) => toastService.loading(message, baseConfig),
};

export default toast;
