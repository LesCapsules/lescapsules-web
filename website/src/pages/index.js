import React from 'react'

import Layout from '../components/layout'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <div className="container">
      <h1>Les Capsules</h1>
      <p>Bienvenue sur notre Site</p>
    </div>
  </Layout>
)

export default IndexPage
