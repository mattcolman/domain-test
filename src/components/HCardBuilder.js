import React, { Component } from 'react';
import styled from 'styled-components';
import HCardForm from './HCardForm';
import PreviewCard from './PreviewCard';

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
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
    state: '',
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
        <PreviewCard />
      </Wrapper>
    );
  }
}

export default HCardBuilder;
