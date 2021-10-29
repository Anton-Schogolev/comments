import React from 'react';
import {CommentType} from "../../App";



function Comment({comment, author, parentId, id, childrenCom}: CommentType) {

    return (
        <div>
            <span><b>{author}</b></span>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;
