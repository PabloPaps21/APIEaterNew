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
    <div>
      <h1>Personajes</h1>
      <Link href='/'>GO home</Link>
      {
        character.length > 0 ?(
          character.map((persona, idx) => {
            return(
              
              <Link  key={idx} href={`/personaje/${persona.id}`}>
                <div>
                  <img src={persona.image} alt={`${name} Thumbnail`} />
                  <p>{persona.id}_{persona.name}</p>
                </div>
              </Link>
            );
          })
        ) : <h1>Cargando</h1>
      }
    </div>
  )
}