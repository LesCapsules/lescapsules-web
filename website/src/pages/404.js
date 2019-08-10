import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="row my-5 text-center">
      <div className="col-md-12">
        <h1>Page introuvable</h1>
        <p>
          Impossible de trouver cette page... <br />
        </p>
        <p>
          <Link to="/">Retour à l'acceuil</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
