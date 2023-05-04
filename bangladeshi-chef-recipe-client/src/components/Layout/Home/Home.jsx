/* eslint-disable no-unused-vars*/ 
import React, { useEffect, useState } from 'react';
import Bannar from './Bannar/Bannar';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../ChefCard/ChefCard';
import Spinner from 'react-bootstrap/Spinner';

import { Button, Card } from 'react-bootstrap';

const Home = () => {
    const chefRecipes=useLoaderData();
    const [favoriteRecipe,setFavoriteRecipe]=useState();
    useEffect(()=>{
        fetch('http://localhost:5000/favoriteRecipe')
        .then(res=>res.json())
        .then(data=>setFavoriteRecipe(data));
    },[])
    console.log(favoriteRecipe);
    return (
        <div className='container'>
           <Bannar></Bannar>
           <div className='row'>
           {
            chefRecipes.map(chefRecipe=><ChefCard
            key={chefRecipe._id} chefRecipe={chefRecipe}
            ></ChefCard>)
           }
           </div>
           <h1 className='text-center mt-5 mb-2 '>The best recipe in the Bangladesh</h1>
           <div className='row'>
           {
    favoriteRecipe?
    favoriteRecipe.map(favoriteRecipe=><div key={favoriteRecipe.recipeName} className='col-4'>
      < Card className='col-4 container my-3 py-5 mx-2' style={{ width: '26rem',height:'44rem' }}>
      <Card.Img style={{ width: '24rem',height:'20rem' }} variant="top" src={favoriteRecipe?.image}/>
      <Card.Body>
        <Card.Title>{favoriteRecipe?.recipeName}</Card.Title>
        <Card.Text>
            {favoriteRecipe?.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>)
    : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

  }
           </div>
        </div>
    );
};

export default Home;