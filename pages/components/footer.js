import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer(){
  return(
    <footer>
    <a
      href="https://www.linkedin.com/in/pablo-peralta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="talk">Let's talk </p>
      <FontAwesomeIcon icon={ faWifi } style={{color: "#FFF", fontSize: "30"}}/>
    </a>
    <style jsx>{`
    footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #595a5c;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .talk {
          font-size:20px;
          margin-right: 10px;
          color:  #00ff99;
        }
    `}</style>
    </footer>
  )
}