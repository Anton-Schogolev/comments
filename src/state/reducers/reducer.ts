import {AnyAction} from "redux";

const initState = {}

export type StateType = typeof initState

export const reducer = (state = initState, action: AnyAction): StateType => {
    switch (action.type) {
        default:
            return state
    }
}
