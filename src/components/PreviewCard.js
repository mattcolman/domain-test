import React, { Component } from "react";
import styled from "styled-components";
import DisplayField from "./commons/DisplayField";
import avatarPreview from "../images/preview.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: ${props => props.theme.color.darkBlue};
  height: 100px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const TopText = styled.span`
  align-self: flex-end;
  color: #aebabc;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.sans};
`;

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

const AvatarContainer = styled.div`
  border: 1px solid grey;
  position: absolute;
  background-color: white;
  width: 84px;
  height: 107px;
  right: 15px;
  top: 15px;
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
      country,
      avatar
    } = this.props;

    const name = firstName.length > 0 ? `${firstName} ${lastName}` : lastName;
    const addressFirstLine =
      houseName.length > 0 ? `${houseName} ${street}` : street;
    const comma = suburb.length > 0 && addressState.length > 0 ? ", " : "";
    const addressSecondLine = `${suburb}${comma}${addressState}`;
    return (
      <Wrapper>
        <TopText>hCard Preview</TopText>
        <Header>
          {name}
          <AvatarContainer>
            <img
              width={82} // it might be better not to stretch the image and crop it instead
              height={105}
              src={avatar || avatarPreview}
              alt="avatar"
            />
          </AvatarContainer>
        </Header>
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
