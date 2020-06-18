var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
  res.json([
      {
          make: "Honda",
          models: [
              {
                  name: "Civic"
              },
              {
                  name: "City"
              }
          ]
      }
  ])
})

module.exports = router