import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.asd</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage