import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: #e1e4e7;
  padding: 20px;
  flex-grow: 1;
`;

class PreviewCard extends Component {
  render() {
    return (
      <Wrapper>
        <span>header</span>
        <span>body</span>
      </Wrapper>
    );
  }
}

export default PreviewCard;
