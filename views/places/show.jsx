const React = require('react');
const Def = require('../default');

function show({ place }) {
  let comments = (
    <h3 className="inactive">No comments yet!</h3>
  );
let rating = (
  <h3 className="inactive">No ratings yet!</h3>
);

if (place.comments.length) {
  let sumRatings = place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = Math.round(sumRatings / place.comments.length)
  let stars = ''
  for (let i = 0; i < averageRating; i++) {
    stars += '⭐️'
  }
  rating = (
    <h3>
     {stars} stars
    </h3>
  )
  if (place.comments.length) {
    comments = place.comments.map((c) => {
      return (
        <div className="border" key={c._id}>
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 😍'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }}

  return (
    <Def>
      <main className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={place.pic} alt={place.name} className="img-fluid" />
            <h3>Located in {place.city}, {place.state}</h3>
          </div>

          <div className="col-md-6">
            <h1>{place.name}</h1>
            <div className="row mt-4">
              <div className="col-12">
                <h2>Rating</h2>
                {rating}
              </div>
            </div>
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>
            <h4>Serving {place.cuisines}</h4>
            <a href={`/places/${place.id}/edit`} className="btn btn-warning"> <i className="bi bi-pencil-fill"></i>Edit</a>
          <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
            </form>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h2>Comments</h2>
            {comments}
            <form action={`/places/${place.id}/comment`} method="POST">
              <div className="form-group">
                <label htmlFor="content">Add a Comment:</label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows="4"
                  placeholder="Enter your comment"
                  required
                ></textarea>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="stars">Rating:</label>
                    <input
                      type="range" // Use range input for the slider
                      className="form-range"
                      name="stars"
                      id="stars"
                      min="0"
                      max="5"
                      step="1" // Step by 1 for integer values
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center"> 
                  <div className="form-group">
                    <label htmlFor="rant" className="form-check-label">Rant</label>
                    <div className="form-check mt-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rant"
                        name="rant"
                        value="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit Comment</button>
            </form>
          </div>
          
         
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
