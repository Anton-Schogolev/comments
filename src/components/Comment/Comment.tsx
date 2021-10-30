import React, { useState } from "react";
import { CommentType } from "../../App";
import { Form } from "../Forms/Form";
import { PrimaryButton } from "@fluentui/react";

function Comment({ comment, author, parentId, id, childrenCom }: CommentType) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
        <span>
            <b>{author}</b>
        </span>
        <p>{comment}</p>
            {
                !showForm
                    ? <PrimaryButton
                        text="Reply"
                        onClick={() => setShowForm(!showForm)}/>
                : <Form />
            }
        </div>
    );
    }

export default Comment;
