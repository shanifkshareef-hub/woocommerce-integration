import { notification } from "antd";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import dayJs from "dayjs";

dayJs.extend(localizedFormat);
dayJs.extend(relativeTime);
export const dayjs = dayJs;

export const clearToken = () => {
  localStorage.clear();
};

export function isAuthenticated(): boolean {
  return true;
}

export const consumerKey = import.meta.env.VITE_CONSUMER_KEY;
export const consumerSecret = import.meta.env.VITE_CONSUMER_SECRET;
