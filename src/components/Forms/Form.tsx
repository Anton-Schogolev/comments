import React, {useState} from "react";
import styled from "styled-components";

import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react";
import {useDispatch} from "react-redux";
import {actions} from "../../state/reducers/reducer";

const FieldsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ErrorContainer = styled.div`
  color: red;
  margin-left: 20px;
`;

type PropsType = { parentIds: string[] | null };

export const Form = ({parentIds}: PropsType) => {
    const dispatch = useDispatch();
    const [authorField, setAuthorField] = useState("");
    const [commentField, setCommentsField] = useState("");
    const [isDirty, setIsDirty] = useState(false);
    const isDisabled = !authorField || !commentField;

    const onAuthorFieldChangeHandler = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setAuthorField(e.currentTarget.value);
        setIsDirty(true);
    };

    const onCommentsFieldChangeHandler = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setCommentsField(e.currentTarget.value);
        setIsDirty(true);
    };

    const addComment = () => {
        dispatch(actions.addComment(authorField, commentField, parentIds))
    }

    return (
        <>
            <FieldsContainer>
                <TextField
                    placeholder="Author"
                    value={authorField}
                    onChange={onAuthorFieldChangeHandler}
                />
                <TextField
                    placeholder="Comments"
                    multiline rows={3}
                    value={commentField}
                    onChange={onCommentsFieldChangeHandler}
                />
            </FieldsContainer>
            {isDirty && isDisabled && (
                <ErrorContainer>
                    {"the author or comments field mustn't be empty !"}
                </ErrorContainer>
            )}
            <PrimaryButton
                disabled={isDisabled}
                onClick={addComment}
                text="Send"
            />
        </>
    );
};
