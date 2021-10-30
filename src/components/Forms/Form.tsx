import React, { useState } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FieldsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = () => {
  const [newValue, setValue] = useState('');

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  };

  return (
    <FormContainer>
      <FieldsContainer>
      <TextField
        placeholder="Author"
        value={newValue}
        onChange={onChangeHandler}
      />
      <TextField placeholder="Comments" />
      </FieldsContainer>
      <ButtonContainer>
        <PrimaryButton text="Send"/>
      </ButtonContainer>
    </FormContainer>
  );
};
