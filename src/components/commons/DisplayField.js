// @flow

import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string,
  label: string,
  value: string
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dbe0e2;
  flex-grow: 1;
  align-items: flex-end;
  min-height: 2rem;
`;

const Label = styled.span`
  color: #2c3e50;
  text-transform: uppercase;
  font-family: "Merriweather Sans", sans-serif;
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
