import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <div>
        <Layout pageTitle="About Me">
            <p>This is the about page</p>
        </Layout>
    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <Seo title="About Me" />