/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Figure } from 'react-bootstrap';
import { FaHandPointRight } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
const ChefRecipes = () => {
    const {id}=useParams();
    const chef=useLoaderData();
    const {ChefPicture,ChefName,YearsOfExperience,NumbersOfRecipes,Likes,ViewRecipesButton,_id,description}=chef;
    return (
    <div className='d-flex container  p-5'>
        <div className='me-3'>
            <img className='rounded' style={{ width: '36rem',height:'26rem' }} src={ChefPicture} alt="" />
        </div>
        {/* chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience. */}

        <div className='p-5 text-center border  border-secondary'>
            <h3>Name: {ChefName}</h3>
            <p>Experience: {YearsOfExperience}</p>
            <div className="d-flex justify-content-around align-items-center">
                <h4>Total recipes: {NumbersOfRecipes}</h4>
                <h4><FaHandPointRight></FaHandPointRight> {Likes}</h4>
            </div>
            <p><small className='fs-3'>Description: </small>{description}</p>
            <div className="d-grid gap-2">
     <button className="btn btn-secondary" type="button">Favorite</button>

</div>
        </div>
    </div>
    );
};

export default ChefRecipes;