/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefCard = (prob) => {
    const {ChefPicture,ChefName,YearsOfExperience,NumbersOfRecipes,Likes}=prob.chefRecipe;
    console.log(ChefPicture);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ChefPicture}/>
        <Card.Body>
          <Card.Title>{ChefName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default ChefCard;