import React, { Component } from 'react';
import styled from 'styled-components';
import DisplayField from './commons/DisplayField';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #2c3e50;
  height: 100px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TopText = styled.span`
  align-self: flex-end;
  color: #aebabc;
  text-transform: uppercase;
  font-family: 'Merriweather Sans', sans-serif;
`;

// this blue color should really be in a ThemeProvider
const Body = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Large = styled.div`
  flex-basis: 100%;
`;

const Small = styled.div`
  flex-basis: 50%;
`;

class PreviewCard extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      houseName,
      street,
      postcode,
      suburb,
      addressState,
      phone,
      country
    } = this.props;

    const name = firstName.length > 0 ? `${firstName} ${lastName}` : lastName;
    const addressFirstLine =
      houseName.length > 0 ? `${houseName} ${street}` : street;
    const comma = suburb.length > 0 && addressState.length > 0 ? ', ' : '';
    const addressSecondLine = `${suburb}${comma}${addressState}`;
    return (
      <Wrapper>
        <TopText>hCard Preview</TopText>
        <Header>{name}</Header>
        <Body>
          <Large>
            <DisplayField label="email" value={email} />
          </Large>
          <Large>
            <DisplayField label="phone" value={phone} />
          </Large>
          <Large>
            <DisplayField label="address" value={addressFirstLine} />
          </Large>
          <Large>
            <DisplayField value={addressSecondLine} />
          </Large>
          <Small>
            <DisplayField label="postcode" value={postcode} />
          </Small>
          <Small>
            <DisplayField label="country" value={country} />
          </Small>
        </Body>
      </Wrapper>
    );
  }
}

export default PreviewCard;
