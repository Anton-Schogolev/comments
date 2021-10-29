import React, {FC, useState} from 'react';
import {CommentType} from "../../App";
import styled from "styled-components";

const CommentContainer = styled.div<{ isFirst: boolean }>`
  border-left: ${({isFirst}) => !isFirst && "#8597ff solid 1px"};
  margin: 10px;
`

const Comment: FC<CommentType> = (
    {
        comment, author,
        parentId, id,
        childrenCom, depth,
        children
    }) => {
    const [showChildren, setShowChildren] = useState(depth !== 2)
    const isFirst = !depth;
    const renderChildren = () => {
        return childrenCom?.map(comment => <Comment {...comment}/>)
    }
    return (
        <CommentContainer isFirst={isFirst}>
            <div>
                <span><b>{author}</b></span>
                <p>{comment}</p>
                <button>reply</button>
            </div>
            {showChildren
                ? <>
                    {childrenCom && <button onClick={() => setShowChildren(false)}>-</button>}
                    {renderChildren()}
                </>
                : <button onClick={() => setShowChildren(true)}>show more</button>
            }
        </CommentContainer>
    );
}

export default Comment;
