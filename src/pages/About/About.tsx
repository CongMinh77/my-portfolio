import React, { useEffect } from "react"
import Card from "../../components/Card"
import { getPageTitle } from "../../utils"

const About = () => {
  useEffect(() => {
    document.title = getPageTitle("About")
  }, [])

  return (
    <div>
      <h1>About</h1>
      <Card />
    </div>
  )
}

export default About
