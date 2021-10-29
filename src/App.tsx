import React from 'react';
import {v1} from "uuid";
import Comment from "./components/Comment/Comment";

export type CommentType = {
    id: string
    author: string
    comment: string
    children: CommentType[] | null
    parentId: string | null
}

const comments: CommentType[] = [
    {
        author: "user1",
        comment: "awesome",
        id: v1(),
        children: null,
        parentId: null,
    }
]

function App() {
    return (
        comments.map(item => <Comment comment={item}/>)
    );
}

export default App;
