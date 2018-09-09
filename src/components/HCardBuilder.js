import React, { Component } from 'react';
import styled from 'styled-components';
import HCardForm from './HCardForm';
import PreviewCard from './PreviewCard';

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e1e4e7;
  padding: 20px;
  flex-grow: 1;
  max-width: 520px;
`;

class HCardBuilder extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    addressState: '',
    postcode: '',
    country: ''
  };

  handleChange = state => {
    this.setState(state);
  };

  render() {
    return (
      <Wrapper>
        <HCardForm onChange={this.handleChange} />
        <RightSide>
          <PreviewCard {...this.state} />
        </RightSide>
      </Wrapper>
    );
  }
}

export default HCardBuilder;
