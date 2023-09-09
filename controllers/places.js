const router = require('express').Router()

// More code here in a moment

  



router.get('/', (req,res)=>{
 let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/food2.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/food3.jpg'
  }]
  
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router

