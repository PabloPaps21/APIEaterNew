import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Home() {
  const [character, setCharacter] = useState([]);
  const ENDPOINT = "https://rickandmortyapi.com/api/character/"
  const consumingApi = async () => {
    try {
      const res = await axios.get()
      const characters = res.data;
      setCharacter(characters.results);
    }catch (error) {
      console.log("error ====> :(", error);
    }
  };
  useEffect(()=> {
    consumingApi();
  }, []);

  return (
    <div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
