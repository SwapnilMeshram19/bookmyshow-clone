import { loadData, saveData } from "../../Utils/LocalStorage";

const initState = {
    isAuth: loadData("auth") || false
}

export const reducer = (state = initState, { type, auth }) => {
    switch (type) {
        case "LOGIN-AUTH": {
            const updated = { auth: auth }
            saveData("auth", updated)
            return {
                ...state,
                isAuth: updated.auth
            }
        }
        default:
            return state
    }
}