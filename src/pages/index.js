import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Newsletter from "../components/Newsletter"
import GetClear from "../components/getClear"
import Quote from "../components/Quote"
import Services from "../components/Services"
import MainContact from "../components/MainContact"

import "../assets/css/reset.css"
import "../assets/css/styles.css"
import "../assets/css/nav_styles.css"
import ShowUp from "../components/ShowUp"

export default function Home() {
  return (
    <Layout>
      <>
        <Intro />
        <GetClear />
        <ShowUp />
        <Newsletter />
        <Services />
        <Quote />
        <MainContact />
      </>
    </Layout>
  )
}
