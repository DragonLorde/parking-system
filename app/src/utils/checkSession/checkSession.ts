import { checkSessionType } from "./model/checkSession.model";

export const checkSession: checkSessionType = (key): any => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : false
}
