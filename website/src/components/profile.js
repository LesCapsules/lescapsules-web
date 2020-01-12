import React from 'react'
import Img from 'gatsby-image'

const Profile = ({ name, fluidImg, favouritePlace, hobbies }) => {
  return (
    <div>
      <Img fluid={fluidImg} />
      <div className="m-2">
        <h4>{name}</h4>
        <p>Lieu de bandade favori: {favouritePlace}</p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </div>
  )
}

export default Profile
