import {v1} from "uuid";
import {addComment} from "./utils";

export type CommentType = {
    id: string
    author: string
    comment: string
    childrenCom: CommentType[] | null
    parentIds: string[] | null
}
const id1 = v1();
const id2 = v1();
const id3 = v1();
const initState = {
    comments: [
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
    ] as CommentType[]
}

export type StateType = typeof initState

export const reducer = (state = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD_COMMENT":
            const newCom: CommentType = {
                id: v1(),
                ...action.payload,
                childrenCom: null
            }
            return {
                ...state,
                comments: addComment(state.comments, newCom)
            };
        default:
            return state
    }
}

type GetActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer R } ? R : never;
export type ActionsType = GetActionsTypes<typeof actions>

export const actions = {
    addComment: (author: string, comment: string, parentIds: string[] | null) => ({
        type: "ADD_COMMENT",
        payload: {
            author, comment, parentIds
        }
    } as const)
}
