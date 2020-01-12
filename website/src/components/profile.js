import React from 'react'

const Profile = ({ name, imgSrc, favouritePlace, hobbies }) => {
  return (
    <>
      <img src={imgSrc} alt={name} className="img-fluid" />
      <div className="m-2">
        <h4>{name}</h4>
        <p>Lieu de bandade favori: {favouritePlace}</p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </>
  )
}

export default Profile
