import {createStore} from "redux";
import {reducer, StateType} from "./reducers/reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = createStore(reducer)
export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector
