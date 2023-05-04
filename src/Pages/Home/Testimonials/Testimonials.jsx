import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { FaUserCircle } from 'react-icons/fa';
const Testimonials = () => {
    return (
        <div>
            <h3 className='text-center'>Customer Testimonials</h3>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><FaUserCircle></FaUserCircle>  <span className='ms-2 text-success'> Lara Smith(Food Critic)</span> </Accordion.Header>
        <Accordion.Body>
        I was blown away by the creativity and flavors of the dishes at The fusion of Thai Chef's Recipe. The chefs truly know how to combine traditional Thai ingredients with modern techniques to create an unforgettable dining experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header><FaUserCircle></FaUserCircle>  <span className='ms-2 text-success'> Jane Kufan(Resturant Owner)</span> </Accordion.Header>
        <Accordion.Body>
        As someone who loves Thai food, I can say that The fusion of Thai Chef's Recipe is a must-visit. The dishes are both authentic and innovative, and the presentation is just as impressive as the taste.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header><FaUserCircle></FaUserCircle>  <span className='ms-2 text-success'> Rastogi Fulmi(Food Blogger)</span> </Accordion.Header>
        <Accordion.Body>
        I have been in the restaurant industry for over a decade, and The fusion of Thai Chef's Recipe is one of the most impressive establishments I have ever seen. The chefs are true artists, and the food is simply phenomenal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      <Accordion.Header><FaUserCircle></FaUserCircle>  <span className='ms-2 text-success'> Alex Rodriguez(Chef)</span> </Accordion.Header>
        <Accordion.Body>
        As a fellow chef, I have to say that The fusion of Thai Chef's Recipe is truly impressive. The combination of flavors and techniques is masterful, and the dishes are executed to perfection.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header><FaUserCircle></FaUserCircle>  <span className='ms-2 text-success'> Sarah Kim(Foodie)</span> </Accordion.Header>
        <Accordion.Body>
        The fusion of Thai Chef's Recipe exceeded all of my expectations. The dishes were bursting with flavor and the presentation was breathtaking. I can't wait to come back!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Testimonials;