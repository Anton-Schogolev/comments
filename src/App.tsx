import React from 'react';
import {v1} from "uuid";
import Comment from "./components/Comment/Comment";

export type CommentType = {
    id: string
    author: string
    comment: string
    childrenCom: CommentType[] | null
    parentId: string | null
    depth: number
}

const firstCom = v1();
const comments: CommentType[] = [
    {
        author: "user1",
        comment: "awesome",
        id: firstCom,
        childrenCom: [
            {
                author: "user1",
                comment: "awesome",
                id: v1(),
                childrenCom: [
                    {
                        author: "user1",
                        comment: "awesome",
                        id: v1(),
                        childrenCom: [
                            {
                                author: "user1",
                                comment: "awesome",
                                id: v1(),
                                childrenCom: null,
                                parentId: null,
                                depth: 3,
                            }
                        ],
                        parentId: null,
                        depth: 2,
                    }
                ],
                parentId: null,
                depth: 1,
            }
        ],
        parentId: null,
        depth: 0,
    }
]

function App() {
    return (
        <>
            {comments.map(item => <Comment {...item}/>)}
        </>
    );
}

export default App;
