import React, { useState } from "react";
import styled from "styled-components";

import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton } from "@fluentui/react";

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

export const Form = () => {
  const [authorField, setAuthorField] = useState("");
  const [commentsField, setCommentsField] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const isDisabled = !authorField || !commentsField;

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
          value={commentsField}
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
        text="Send"
      />
    </>
  );
};
