const React = require('react');
const Def = require('../default');



function show({ place }) {
    return (
        <Def>
            <main className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={place.pic} alt={place.name} className="img-fluid"/>
                        <h3>Located in {place.city}, {place.state}</h3>
                    </div>
                    
                    <div className="col-md-6">
                        <h1>{place.name}</h1>
                        <div className="row mt-4">
                    <div className="col-12">
                        <h2>Rating</h2>
                        <p>Currently unrated</p>
                    </div>
                </div>
                <h2>Description</h2>
                        <h3>{place.showEstablished()}</h3>
                        <h4>Serving {place.cuisines}</h4>
                    </div>
                </div>

                

                <div className="row mt-4">
                    <div className="col-12">
                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                    </div>
                    {/* Question is in need to use data.id or place.id */}
                    <a href={`/places/${place.id}/edit`} className="btn btn-warning"> <i className="bi bi-pencil-fill"></i>Edit</a>        

                    <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
                  </form> 


                </div>
            </main>
        </Def>
    );
}

module.exports = show;
