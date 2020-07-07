import React from 'react'

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h3 className="title">{title}</h3>
      {children}
    </section>
  )
}

export default Section
