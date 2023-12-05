import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const toastify = (text, status) => {
    let typeToast;
    switch (status) {
        case 'INFO':
            typeToast = toast.TYPE.INFO
            break;
        case 'SUCCESS':
            typeToast = toast.TYPE.SUCCESS
            break;
        case 'ERROR':
            typeToast = toast.TYPE.ERROR
            break;
        case 'WARNING':
            typeToast = toast.TYPE.WARNING
            break;
        default:
            break;
    }
    toast(text, {
        theme: 'colored',
        autoClose: 2000,
        type: typeToast
    });
}