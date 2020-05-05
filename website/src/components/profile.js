import React from 'react'
import styled from 'styled-components'
import { gridBreakpoints, spacings } from './constants'

const ProfileStyles = styled.div`
  box-shadow: rgba(29, 33, 41, 0.15) 0px 2px 40px 0px;
  padding: ${spacings[2]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${gridBreakpoints.sm}) {
    flex-direction: row;
  }
`

const ImgProfile = styled.img`
  flex: 0 1 150px;
  border-radius: 50%;
  border: 1px solid rgb(81, 85, 93);
  padding: ${spacings[0]};
`

const BioStyles = styled.div`
  margin-left: ${spacings[2]};
`

const Profile = ({ name, imgSrc, favouritePlace, hobbies }) => {
  return (
    <ProfileStyles>
      <ImgProfile src={imgSrc} alt={name} />
      <BioStyles>
        <h4>{name}</h4>
        <p>Lieu de bandade favori: {favouritePlace}</p>
        <p>Hobbies: {hobbies}</p>
      </BioStyles>
    </ProfileStyles>
  )
}

export default Profile
