/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/1.jpg';
import img2 from '../../../../assets/2.jpg';
import img3 from '../../../../assets/3.jpg';

const Bannar = () => {
    return (
      <div className='d-flex justify-content-between align-items-center container py-5'>
        <div>
          <h1>This is left part</h1>
        </div>
        <div>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    );
};

export default Bannar;