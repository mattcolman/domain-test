// @flow

import * as React from 'react';
import styled from 'styled-components';

type Props = {
  helper?: string,
  label: string,
  maxLength?: number,
  name: string,
  onChange: string => void,
  placeholder: string,
  type?: 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'text',
  value: ?number | ?string
};

const defaultProps = {
  helper: undefined,
  label: undefined,
  maxLength: undefined,
  placeholder: '',
  type: 'text'
};

const Wrapper = styled.div``;
const OuterDiv = styled.div``;
const InnerDiv = styled.div`
  display: flex;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: 'Merriweather Sans', sans-serif;
  color: #2c3e50;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border-radius: 2px;
  border: 1px solid #c3c3c3;
  padding: 0.3em;
  min-width: 0;
  color: #000;
`;

function InputField({
  className,
  helper,
  label,
  maxLength,
  placeholder,
  onChange,
  name,
  type,
  value
}: Props) {
  return (
    <Wrapper className={className}>
      {label && (
        <FormLabel htmlFor={name} required>
          {label}
        </FormLabel>
      )}
      <OuterDiv>
        <InnerDiv>
          <StyledInput
            id={name}
            type={type}
            name={name}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
          />
        </InnerDiv>
        {helper && <span>{helper}</span>}
      </OuterDiv>
    </Wrapper>
  );
}

export default InputField;
