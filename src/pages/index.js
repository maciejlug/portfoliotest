import * as React from "react"
import HeaderContent from "./components/HeaderContent"
import ProjectsContent from "./components/ProjectsContent"
import ContactContent from "./components/ContactContent"
import Layout from "./components/Layout"

const IndexPage = () => {
  return (

  <div>
    <Layout>
      <HeaderContent />
      <ProjectsContent />
      <ContactContent />
    </Layout>
  </div>
  )
}

export default IndexPage
