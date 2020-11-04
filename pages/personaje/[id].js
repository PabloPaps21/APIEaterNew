import axios from 'axios';
import { useReouter } from 'next/router';
import { useState } from 'react';

const Detail =  ( props ) =>  {
	const router = useReouter()
	const { id } = router.query
	
	return (
		<>
			<h1>Perfil</h1>
			<h2>{props.name}</h2>
		</>
	)
}
