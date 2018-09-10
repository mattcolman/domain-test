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
  color: ${props => props.theme.color.darkBlue};
  font-size: 1.75rem;
  font-family: ${props => props.theme.font.sans};
  font-weight: 800;
`;

// I might like to use css-grid here but it's not fully supported in ie10
const Grid = styled.div`
  margin: 0 -0.3em;
  flex-wrap: wrap;
  display: flex;
`;

const GridCol = styled.div`
  flex-basis: 50%;
`;

const GridColInner = styled.div`
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
`;

const Footer = styled(Grid)`
  padding-top: 1rem;
`;

const Form = styled.form``;

const Section = styled.div`
  border-bottom: 1px solid #b0b8bc;
  text-transform: uppercase;
  color: #b0b8bc;
  font-size: 0.6rem;
  flex-basis: 100%;
  font-weight: 700;
  font-family: ${props => props.theme.font.sans};
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
  font-family: ${props => props.theme.font.sans};
`;

// I love how easy it is to compose styled-components!
const PrimaryButton = styled(CommonButton)`
  background-color: ${props => props.theme.color.primary};
`;

const SecondaryButton = styled(CommonButton)`
  background-color: ${props => props.theme.color.secondary};
`;

function GridInputField(props) {
  return (
    <GridCol>
      <GridColInner>
        <InputField {...props} />
      </GridColInner>
    </GridCol>
  );
}

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
            <GridInputField
              label="Given Name"
              onChange={this.handleFieldChange("firstName")}
              type="text"
              value={firstName}
              name="given-name"
            />
            <GridInputField
              label="Surname"
              onChange={this.handleFieldChange("lastName")}
              type="text"
              value={lastName}
              name="family-name"
            />
            <GridInputField
              label="Email"
              onChange={this.handleFieldChange("email")}
              type="email"
              value={email}
              name="email"
            />
            <GridInputField
              label="Phone"
              onChange={this.handleFieldChange("phone")}
              type="tel"
              value={phone}
              name="tel"
            />
          </Grid>
          <Section>Address</Section>
          <Grid>
            <GridInputField
              label="House name or #"
              onChange={this.handleFieldChange("houseName")}
              type="text"
              value={houseName}
              name="street-address"
            />
            <GridInputField
              label="Street"
              onChange={this.handleFieldChange("street")}
              type="text"
              value={street}
            />
            <GridInputField
              label="Suburb"
              onChange={this.handleFieldChange("suburb")}
              type="text"
              value={suburb}
              name="address-level2"
            />
            <GridInputField
              label="State"
              onChange={this.handleFieldChange("addressState")}
              type="text"
              value={addressState}
              name="address-level1"
            />
            <GridInputField
              label="Postcode"
              onChange={this.handleFieldChange("postcode")}
              type="text"
              value={postcode}
              name="postal-code"
            />
            <GridInputField
              label="Country"
              onChange={this.handleFieldChange("country")}
              type="text"
              value={country}
              name="country"
            />
          </Grid>
          <Footer>
            <GridCol>
              <GridColInner>
                <ImageUploader
                  onLoad={this.handleFieldChange("avatar")}
                  renderButton={clickHandler => (
                    <SecondaryButton type="button" onClick={clickHandler}>
                      Upload Avatar
                    </SecondaryButton>
                  )}
                />
              </GridColInner>
            </GridCol>
            <GridCol>
              <GridColInner>
                <PrimaryButton
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    console.log("create hcard!");
                  }}
                >
                  Create hCard
                </PrimaryButton>
              </GridColInner>
            </GridCol>
          </Footer>
        </Form>
      </Wrapper>
    );
  }
}

export default HCardForm;
