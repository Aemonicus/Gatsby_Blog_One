import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `JDR`, `VR`, `AR`, `developpement web`, `developpement logiciel`]} />
    <h1>Bienvenue dans mon petit Monde !</h1>
    <p>Vous trouverez sur ce blog des billets sur mes passions: le jdr, le développement web, la VR/AR et la BOUFFE !</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    

  </Layout>
)

export default IndexPage
