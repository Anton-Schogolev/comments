import React, { FC, useState } from 'react';
import styled from "styled-components";

import { CommentType } from "../../App";
import { Form } from "../Forms/Form";
import { PrimaryButton } from "@fluentui/react";

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
    const [showChildren, setShowChildren] = useState(depth !== 2);
    const [showForm, setShowForm] = useState(false);

    const isFirst = !depth;
    const renderChildren = () => {
        return childrenCom?.map(comment => <Comment {...comment}/>)
    }

    return (
        <CommentContainer isFirst={isFirst}>
            <div>
                <span><b>{author}</b></span>
                <p>{comment}</p>
                { !showForm
                    ? <PrimaryButton
                        text="Reply"
                        onClick={() => setShowForm(!showForm)}/>
                    : <Form />
                }
            </div>
            {showChildren
                ? <>
                    {childrenCom &&
                        <PrimaryButton
                            text="-"
                            onClick={() => setShowChildren(false)}
                        />}
                    {renderChildren()}
                </>
                : <PrimaryButton
                    text="Show more"
                    onClick={() => setShowChildren(true)}/>
            }
        </CommentContainer>
    );
    }

export default Comment;
