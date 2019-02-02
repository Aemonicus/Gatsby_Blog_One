import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
    <Layout>
      <SEO title="Qui suis je ?" keywords={[`about me`, `presentation`]} />
      <h1>Qui suis je ?</h1>
      <p>Question existentielle et très certainement nombriliste quand elle apparait dans ma tête. Cette dernière devient beaucoup plus sympathique venant d'un aimable visiteur qui a eu la curiosité de pousser sa visite jusqu'à cette page inutile. Ne soyez pas modeste, je suis le premier à ne visiter les pages "About" que quand le site vaut VRAIMENT le détour (ou quand le site met en avant des formes biologiques qui forcent le respect..)</p>
    </Layout>
  )

export default About;
