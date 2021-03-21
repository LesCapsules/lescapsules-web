import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

const ProfileStyles = styled.div<ThemeProps>`
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: ${(props) => props.theme.spacings[2]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${(props) => props.theme.gridBreakpoints.sm}) {
    flex-direction: row;
  }
`

const ImgProfile = styled(GatsbyImage)<ThemeProps>`
  img {
    flex: 0 1 150px;
    max-width: 150px;
    border-radius: 50%;
    border: 1px solid rgb(81, 85, 93);
    padding: ${(props) => props.theme.spacings[0]};
  }
`

const BioStyles = styled.div<ThemeProps>`
  margin-left: ${(props) => props.theme.spacings[2]};
`

interface ProfileProps {
  name: string
  image: IGatsbyImageData
  favouritePlace: string
  hobbies: string
}

const Profile: React.FC<ProfileProps> = ({
  name,
  image,
  favouritePlace,
  hobbies,
}) => {
  return (
    <ProfileStyles>
      <ImgProfile image={image} alt={name} />
      <BioStyles>
        <h4>{name}</h4>
        <p>Lieu de bandade favori: {favouritePlace}</p>
        <p>Hobbies: {hobbies}</p>
      </BioStyles>
    </ProfileStyles>
  )
}

export default Profile
