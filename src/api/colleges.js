import { cacheInstance } from "./config";

export const getColleges = () => cacheInstance.url("/group/getColleges").get();
