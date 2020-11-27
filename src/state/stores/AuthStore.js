import {Store} from "../common/store/store";
import {Registry} from "../common/store/registry";

export const SET_AUTH = "SET_AUTH";


const AuthStore = new Store("login", {
    data: {
        autorizeFormOpen: true
    },
    options: {
        shouldInitFromState: true,
        stateKey: "login",
    },
    reducers: [
        {
            type: SET_AUTH,
            action(state, payload) {

                return {
                    ...state,
                    autorizeFormOpen: payload,
                };
            },
        },
        {},
    ],
});

Registry.addStore(AuthStore);

export {AuthStore};
