import React, {FC, useState} from 'react';
import { Form } from "../Forms/Form";
import { PrimaryButton } from "@fluentui/react";
import styled from "styled-components";
import {CommentType} from "../../state/reducers/reducer";

const CommentContainer = styled.div<{ isFirst: boolean }>`
    border-left: ${({isFirst}) => !isFirst && "#8597ff solid 1px"};
    margin: 10px;
`

const Comment: FC<CommentType> = (
    {
        comment, author,
        parentIds, id,
        childrenCom
    }) => {
    const [showChildren, setShowChildren] = useState(parentIds?.length !== 2);
    const [showForm, setShowForm] = useState(false);

    const isFirst = !parentIds;
    const renderChildren = () => {
        return childrenCom?.map(comment => <Comment key={comment.id} {...comment}/>)
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
                    : <Form parentIds={[...(parentIds || []), id]}/>
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
