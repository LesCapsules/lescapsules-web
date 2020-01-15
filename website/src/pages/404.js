import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const title = 'Page introuvable'
const description = 'Impossible de trouver cette page...'

const NotFoundPage = () => (
  <Layout title={title} description={description}>
    <div className="row my-5 text-center">
      <div className="col-md-12">
        <h1>{title}</h1>
        <p>
          {description}
          <br />
        </p>
        <p>
          <Link to="/">Retour à l'acceuil</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
