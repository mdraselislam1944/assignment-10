/* eslint-disable no-unused-vars*/ 
import React from 'react';
import Bannar from './Bannar/Bannar';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../ChefCard/ChefCard';

const Home = () => {
    const chefRecipes=useLoaderData();
    return (
        <div>
           <Bannar></Bannar>
           <div className='d-flex '>
           {
            chefRecipes.map(chefRecipe=><ChefCard
            key={chefRecipe._id} chefRecipe={chefRecipe}
            ></ChefCard>)
           }
           </div>
  
        </div>
    );
};

export default Home;