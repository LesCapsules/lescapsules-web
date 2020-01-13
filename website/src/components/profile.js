import React from 'react'
import styled from 'styled-components'

const ImgProfile = styled.img`
  max-width: 100%;
  border-radius: 50%;
  border: 1px solid rgb(81, 85, 93);
  padding: 3px;
`

const Profile = ({ name, imgSrc, favouritePlace, hobbies }) => {
  return (
    <div
      className="row p-3"
      style={{
        boxShadow: 'rgba(29, 33, 41, 0.15) 0px 2px 40px 0px',
      }}
    >
      <div style={{ width: '30%', maxWidth: '150px' }}>
        <ImgProfile src={imgSrc} alt={name} />
      </div>
      <div className="col m-2">
        <h4>{name}</h4>
        <p>Lieu de bandade favori: {favouritePlace}</p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </div>
  )
}

export default Profile
