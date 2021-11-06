import {createStore} from "redux";
import {reducer, StateType} from "./reducers/reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {v1} from "uuid";

const COMMENTS = 'comments';

const id1 = v1();
const id2 = v1();
const id3 = v1();
const comments = localStorage[COMMENTS];
const preloadedState = comments ? JSON.parse(comments) : [
    {
        author: "user1",
        comment: "awesome",
        id: id1,
        childrenCom: [
            {
                author: "user1",
                comment: "awesome",
                id: id2,
                childrenCom: [
                    {
                        author: "user1",
                        comment: "awesome",
                        id: id3,
                        childrenCom: [
                            {
                                author: "user1",
                                comment: "awesome",
                                id: v1(),
                                childrenCom: null,
                                parentIds: [id1, id2, id3],
                            }
                        ],
                        parentIds: [id1, id2],
                    }
                ],
                parentIds: [id1],
            }
        ],
        parentIds: null,
    }
]

export const store = createStore(reducer, {comments: preloadedState})

store.subscribe(() => {
    localStorage[COMMENTS] = JSON.stringify(store.getState().comments);
})

export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector
