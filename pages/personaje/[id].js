import axios from 'axios';
import { useRouter } from "next/router";
import Link from 'next/link';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/footer'


const Detail =  ( props ) =>  {
	const router = useRouter()
	const { id } = router.query
	
	return (
		<div className="container">
			<main>

			<Link href={'/'}><a> <FontAwesomeIcon icon={faHome} style={{color: "#3385ff", fontSize: "30"}}/></a></Link>
			<h1>{props.name}</h1>
			<div className="card">
				<img src={props.image}/>
				{/* }<h2><span>name: </span>{props.name}</h2>*/}
				<h2><span>status: </span>{props.status}</h2>
				<h2><span>gender: </span>{props.gender}</h2>
    		<h2><span>species: </span>{props.species}</h2>
				<h2><span>origin:  </span>{props.location.name}</h2>
			</div>
    	
			</main>
			<Footer />
			<style jsx>{`
					.container {
          min-height: 100vh;
          padding: 0 0.5rem;
          dnpm isplay: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
				main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
				span{
          color:#3385ff;
        }
			`}</style>
		</div>
	)
}

Detail.getInitialProps = async (ctx) => {
	console.log(ctx.query.id);

	const res = await axios.get(`https://rickandmortyapi.com/api/character/${ctx.query.id}`);
	const uniqueDetail = res.data

	return uniqueDetail
}

export default Detail