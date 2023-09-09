const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
    <h1>REST-Rant</h1>
    <div>
      <img src="/images/food1.jpg" alt="Chia Fruit Shake" />
      <div>
      Photo by <a href="https://unsplash.com/@goodeats_yqr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GoodEats YQR</a> on <a href="https://unsplash.com/photos/bMvXpKuRN3g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

      </Def>
    )
  }
  

module.exports = home


