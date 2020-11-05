import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/footer'

export default function Home() {
  const [character, setCharacter] = useState([]);
  
  const ENDPOINT = "https://rickandmortyapi.com/api/character/";
  
  const consumingApi = async () => {
    try {
      const res = await axios.get(ENDPOINT);
      const personajes = res.data;
      
      //console.log(personajes.results);

      setCharacter(personajes.results);
    }catch (error) {
      console.log("error =====>", error);
    }
  };

  useEffect(() => {
    consumingApi();
  }, []);

  return(
    <div className="container"> 
      <Head>
        <title className="pTitle">APIEater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="ptitle">Welcome to <span> Rick </span> & <span>Morty's</span> world</h1>
      <p className="subtitle">you can find some characters and characteristics</p>
      
      <ul className="grid">
        {
          character.length > 0 ?(
            character.map((persona, idx) => {
              return(
                <li key={idx} className="card">
                  <Link href={`/personaje/${persona.id}`}>
                    <a>
                      <div>
                        <img src={persona.image} alt={`${name} Thumbnail`} className='img-grid' />
                        <h3><span>"</span>{persona.name}<span>"</span></h3>
                      </div>
                    </a> 
                  </Link>
                </li>
              );
            })
          ) : 
        <img src="https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif"/> 
        }
      </ul>
      <Link href={'/'}><a> <FontAwesomeIcon icon={faHome} style={{color: "#3385ff", fontSize: "30"}}/></a></Link>
      </main>

      <Footer />
      
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        span{
          color:#3385ff;
        }
        span:hover {
          color: #00ff99;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 80%;
          margin-top: 3rem;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          
        }
        .card {
          margin: 20px;
          flex-basis: 45%;
          padding: 10px;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          -webkit-box-shadow: 1px 3px 9px 3px rgba(0,0,0,0.48); 
          box-shadow: 1px 3px 9px 3px rgba(0,0,0,0.48);
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 10px;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .ptitle {
          font-size: 3rem;
        }
        .subtitle {
          font-size: 1.5rem;
        }
        .img-grid {
          filter: grayscale(100%);
          border-radius: 50%;
        }
        .img-grid:hover{
          filter: none;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .img-grid {
            width: 100%;
          }
          .ptitle {
            font-size: 1.8rem;
            text-align: center;
          }
          .subtitle {
            text-align: center;
            font-size: 1rem;
          }

        }
      `}</style>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  )
}