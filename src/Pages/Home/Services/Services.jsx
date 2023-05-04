import React from 'react';

const Services = () => {
    return (
        <div>
            <h3 className='text-center m-5'>Our Services</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            
            <div className="col h-full">
                <div className="card h-full">
                    <img src="..." class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Private Dinner Parties</h5>
                        <p className="card-text">Experience the flavors of Thailand in the comfort of your own home with a private dinner party catered by one of our expert Thai chefs. We will work with you to create a customized menu to fit your tastes and dietary restrictions.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img src="..." class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cooking Classes</h5>
                        <p className="card-text">Learn the art of Thai cooking with one of our hands-on cooking classes. Our experienced chefs will guide you through the process of preparing traditional Thai dishes using authentic techniques and ingredients. Classes are available for all skill levels, from beginner to advanced.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img src="..." class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Corporate Catering</h5>
                        <p className="card-text">Impress your clients or employees with a delicious Thai catered lunch or dinner. Our chefs will work with you to create a menu that suits your event and budget, and our professional catering staff will ensure that everything runs smoothly.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-full">
                    <img src="..." class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Food Truck Catering</h5>
                        <p className="card-text">Spice up your next event with our Thai food truck catering. Our food truck is fully equipped with everything needed to serve fresh, delicious Thai food on the go. Perfect for festivals, concerts, and other outdoor events.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default Services;