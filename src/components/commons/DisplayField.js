// @flow

import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string,
  label: string,
  value: string
};

// ie10 only has partial support for flexbox. alignItems: flex-end doesn't work.
const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-grow: 1;
  border-bottom: 1px solid #dbe0e2;
  min-height: 2.25rem;
`;

const Label = styled.div`
  padding-top: 0.5rem;
  color: {props => props.theme.color.darkBlue}
  text-transform: uppercase;
  font-family: ${props => props.theme.font.sans};
  font-size: 0.6rem;
  min-width: 5rem;
`;

const Text = styled.div`
  flex-grow: 1;
`;

function DisplayField({ className, label, value }: Props) {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <Text>{value}</Text>
    </Wrapper>
  );
}

export default DisplayField;
