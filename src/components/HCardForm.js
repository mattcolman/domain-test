import React, { Component } from "react";
import styled from "styled-components";
import { memoize } from "lodash/fp";
import InputField from "./commons/InputField";
import ImageUploader from "./commons/ImageUploader";

const Wrapper = styled.div`
  display: block;
  background-color: white;
  padding: 40px;
  flex-grow: 1;
`;

const Title = styled.span`
  color: #2c3e50;
  font-size: 1.75rem;
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 800;
`;

// I might like to use css-grid here but it's not supported in ie10
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
  font-family: "Merriweather Sans", sans-serif;
  margin: 1.5em 0;
`;

const CommonButton = styled.button`
  border-radius: 2px;
  font-size: 1.1rem;
  color: white;
  min-width: 0;
  flex-grow: 1;
  padding: 0.3rem 0.3rem;
  width: 100%;
  font-family: "Merriweather Sans", sans-serif;
`;

// I love how easy it is to compose styled-components!
const PrimaryButton = styled(CommonButton)`
  background-color: #3498db;
`;

const SecondaryButton = styled(CommonButton)`
  background-color: #627b8b;
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
      country,
      className
    } = this.props;
    return (
      <Wrapper className={className}>
        <Title>hCard Builder</Title>
        <Form>
          <Section>Personal Details</Section>
          <Grid>
            <StyledInputField
              label="Given Name"
              onChange={this.handleFieldChange("firstName")}
              type="text"
              value={firstName}
              name="given-name"
            />
            <StyledInputField
              label="Surname"
              onChange={this.handleFieldChange("lastName")}
              type="text"
              value={lastName}
              name="family-name"
            />
            <StyledInputField
              label="Email"
              onChange={this.handleFieldChange("email")}
              type="email"
              value={email}
              name="email"
            />
            <StyledInputField
              label="Phone"
              onChange={this.handleFieldChange("phone")}
              type="tel"
              value={phone}
              name="tel"
            />
          </Grid>
          <Section>Address</Section>
          <Grid>
            <StyledInputField
              label="House name or #"
              onChange={this.handleFieldChange("houseName")}
              type="text"
              value={houseName}
              name="street-address"
            />
            <StyledInputField
              label="Street"
              onChange={this.handleFieldChange("street")}
              type="text"
              value={street}
            />
            <StyledInputField
              label="Suburb"
              onChange={this.handleFieldChange("suburb")}
              type="text"
              value={suburb}
              name="address-level2"
            />
            <StyledInputField
              label="State"
              onChange={this.handleFieldChange("addressState")}
              type="text"
              value={addressState}
              name="address-level1"
            />
            <StyledInputField
              label="Postcode"
              onChange={this.handleFieldChange("postcode")}
              type="text"
              value={postcode}
              name="postal-code"
            />
            <StyledInputField
              label="Country"
              onChange={this.handleFieldChange("country")}
              type="text"
              value={country}
              name="country"
            />
          </Grid>
          <Footer>
            <GridCol>
              <ImageUploader
                onLoad={this.handleFieldChange("avatar")}
                renderButton={clickHandler => (
                  <SecondaryButton type="button" onClick={clickHandler}>
                    Upload Avatar
                  </SecondaryButton>
                )}
              />
            </GridCol>
            <GridCol>
              <PrimaryButton
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  console.log("create hcard!");
                }}
              >
                Create hCard
              </PrimaryButton>
            </GridCol>
          </Footer>
        </Form>
      </Wrapper>
    );
  }
}

export default HCardForm;
