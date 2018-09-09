import React, { Component } from 'react';
import styled from 'styled-components';
import { memoize } from 'lodash/fp';
import InputField from './commons/InputField';

const Wrapper = styled.div`
  display: block;
  background-color: white;
  max-width: 480px;
  padding: 40px;
  flex-grow: 1;
`;

const Title = styled.span`
  color: #2c3e50;
  font-size: 1.75rem;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 800;
`;

const Grid = styled.div`
  margin: 0 -0.3em;
  flex-wrap: wrap;
  display: flex;
`;

const GridCol = styled.div`
  flex-basis: 50%;
  min-width: 0;
  flex-grow: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
`;

const Footer = styled(Grid)`
  padding-top: 1rem;
`;

const StyledInputField = GridCol.withComponent(InputField);

const Form = styled.form``;

const Section = styled.div`
  border-bottom: 1px solid #b0b8bc;
  text-transform: uppercase;
  color: #b0b8bc;
  font-size: 0.6rem;
  flex-basis: 100%;
  font-weight: 700;
  font-family: 'Merriweather Sans', sans-serif;
  margin: 1.5em 0;
`;

const PrimaryButton = styled.button`
  background-color: #3498db;
  border-radius: 2px;
  font-size: 1.1rem;
  color: white;
  min-width: 0;
  flex-grow: 1;
  padding: 0.3rem 0.3rem;
  width: 100%;
  font-family: 'Merriweather Sans', sans-serif;
`;

class HCardForm extends Component {
  // memoize by the field key so we don't have to create new functions with each render
  handleFieldChange = memoize((key: string) => (value: string) => {
    this.props.onChange({
      [key]: value
    });
  });

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      houseName,
      street,
      postcode,
      addressState,
      suburb,
      country
    } = this.props;
    return (
      <Wrapper>
        <Title>hCard Builder</Title>
        <Form>
          <Section>Personal Details</Section>
          <Grid>
            <StyledInputField
              label="Given Name"
              onChange={this.handleFieldChange('firstName')}
              type="text"
              value={firstName}
            />
            <StyledInputField
              label="Surname"
              onChange={this.handleFieldChange('lastName')}
              type="text"
              value={lastName}
            />
            <StyledInputField
              label="Email"
              onChange={this.handleFieldChange('email')}
              type="email"
              value={email}
            />
            <StyledInputField
              label="Phone"
              onChange={this.handleFieldChange('phone')}
              type="tel"
              value={phone}
            />
          </Grid>
          <Section>Address</Section>
          <Grid>
            <StyledInputField
              label="House name or #"
              onChange={this.handleFieldChange('houseName')}
              type="text"
              value={houseName}
            />
            <StyledInputField
              label="Street"
              onChange={this.handleFieldChange('street')}
              type="text"
              value={street}
            />
            <StyledInputField
              label="Suburb"
              onChange={this.handleFieldChange('suburb')}
              type="text"
              value={suburb}
            />
            <StyledInputField
              label="State"
              onChange={this.handleFieldChange('addressState')}
              type="text"
              value={addressState}
            />
            <StyledInputField
              label="Postcode"
              onChange={this.handleFieldChange('postcode')}
              type="text"
              value={postcode}
            />
            <StyledInputField
              label="Country"
              onChange={this.handleFieldChange('country')}
              type="text"
              value={country}
            />
          </Grid>
          <Footer>
            <GridCol>
              <PrimaryButton>Upload Avatar</PrimaryButton>
            </GridCol>
            <GridCol>
              <PrimaryButton>Create hCard</PrimaryButton>
            </GridCol>
          </Footer>
        </Form>
      </Wrapper>
    );
  }
}

export default HCardForm;
