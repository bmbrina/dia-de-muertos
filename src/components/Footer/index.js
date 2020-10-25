import React from 'react'
import data from '../../data/app.json'

const Footer = () => {
  const { authors } = data
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__copyright">
          Copyright &#169; {year} |&nbsp;
          {authors.map((author, index) => (
            <a className="footer__link" href={author.url} key={index}>
              {author.name}
            </a>
          ))}
        </p>
      </div>
    </footer>
  )
}

export default Footer
