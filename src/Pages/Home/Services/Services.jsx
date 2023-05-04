import React from 'react';

const Services = () => {
    return (
        <div>
            <h3 className='text-center m-5'>Our Services</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            
            <div className="col">
                <div className="card h-full">
                    <img  className="card-img-top" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                    <div className="card-body">
                        <h5 className="card-title">Private Dinner Parties</h5>
                        <p className="card-text">Experience the flavors of Thailand in the comfort of your own home with a private dinner party catered by some of our expert Thai chefs. We will work with you to create a customized menu to fit your tastes and dietary restrictions and give you a homely environment.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img  className="card-img-top" src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                    <div className="card-body">
                        <h5 className="card-title">Cooking Classes</h5>
                        <p className="card-text">Learn the art of Thai cooking with one of our hands-on cooking classes. Our experienced chefs will guide you through the process of preparing traditional Thai dishes using authentic techniques and ingredients.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />
                    <div className="card-body">
                        <h5 className="card-title">Corporate Catering</h5>
                        <p className="card-text">Impress your clients or employees with a delicious Thai catered lunch or dinner. Our chefs will work with you to create a menu that suits your event and budget, and our professional catering staff will ensure that everything runs smoothly.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img src="https://images.unsplash.com/photo-1581004705471-d5177239ab1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Food Truck Catering</h5>
                        <p className="card-text">Spice up your next event with our Thai food truck catering. Our food truck is fully equipped with everything needed to serve fresh, yummy  and delicious Thai food on the go. Perfect for festivals, concerts, and other outdoor events that you can get easily.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default Services;