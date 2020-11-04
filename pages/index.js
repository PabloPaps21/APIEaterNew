import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
        <title>APIEater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="title">Welcome to Rick & Morty's world</h1>
      
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
                        <h3>{persona.id}_{persona.name}</h3>
                      </div>
                    </a> 
                  </Link>
                </li>
              );
            })
          ) : 
        <img src="https://media.giphy.com/media/eiurpkdBMu5h0PzKfr/giphy.gif"/> 
        }
      </ul>
      </main>

      
      <Link href={'/'}><a> <FontAwesomeIcon icon={faHome} /></a></Link>
      
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
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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
          background: #cba3d9;
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
        .logo {
          height: 1em;
        }
        .search input {
          margin-right: .5em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .img-grid {
            width: 100%;
          }
          .search input {
            margin-right: 0;
            margin-bottom: .5em;
          }

          .search input,
          .search button {
            width: 100%;
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