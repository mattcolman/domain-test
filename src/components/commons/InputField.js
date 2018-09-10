// @flow

import * as React from "react";
import styled from "styled-components";

// Using typescript or flow really improves the stability of your components
// Prop types also act as documentation for others using shared components.
type Props = {
  className?: string,
  label?: string,
  name: string,
  onChange: string => void,
  type?: "email" | "hidden" | "number" | "password" | "tel" | "text",
  value: ?number | ?string
};

const defaultProps = {
  className: undefined,
  label: undefined,
  type: "text"
};

const Wrapper = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  min-width: 0;
`;

const FormLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: "Merriweather Sans", sans-serif;
  color: #2c3e50;
`;

const StyledInput = styled.input`
  border-radius: 2px;
  border: 1px solid #c3c3c3;
  padding: 0.3em;
  min-width: 0;
  color: #000;
  width: 100%;
`;

function InputField({
  className,
  label,
  onChange,
  name,
  type,
  value,
  ...restProps
}: Props) {
  return (
    <Wrapper className={className}>
      {label && (
        <FormLabel htmlFor={name} required>
          {label}
        </FormLabel>
      )}
      <InputWrapper>
        <StyledInput
          id={name}
          type={type}
          name={name}
          onChange={e => onChange(e.target.value)}
          value={value}
          {...restProps}
        />
      </InputWrapper>
    </Wrapper>
  );
}

InputField.defaultProps = defaultProps;

export default InputField;
