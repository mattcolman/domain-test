import React, { Component } from "react";
import styled from "styled-components";
import HCardForm from "./HCardForm";
import PreviewCard from "./PreviewCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormWrapper = styled.div`
  max-width: 480px;
  @media (min-width: 320px) and (max-width: 768px) {
    max-width: none;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e1e4e7;
  padding: 20px;
  flex-grow: 1;
  max-width: 520px;
  @media (min-width: 320px) and (max-width: 768px) {
    max-width: none;
  }
`;

class HCardBuilder extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    houseName: "",
    street: "",
    suburb: "",
    addressState: "",
    postcode: "",
    country: "",
    avatar: null
  };

  handleChange = state => {
    this.setState(state);
  };

  render() {
    return (
      <Wrapper>
        <FormWrapper>
          <HCardForm onChange={this.handleChange} />
        </FormWrapper>
        <CardWrapper>
          <PreviewCard {...this.state} />
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default HCardBuilder;
