import React from 'react'

const Links = ({ links }) => {
  return (
    <React.Fragment>
      <h5>Links:</h5>
      <a href={links.repository}>{links.repository}</a><br/>
      <a href={links.npm}>{links.npm}</a>
    </React.Fragment>
  )
}

export default Links
