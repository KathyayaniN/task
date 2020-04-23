const express = require('express');
const router = express.Router();

router.get('/hb', (req, res) => {
    console.log("In Hb");
  res.status(200).json({success: true, message: 'Server alive!!'});
})

// Fetch All the records in table.
router.get('/fetchRecords', (req, res, next) => {
    res.status(200).json({success: true, message: 'In process'});
})

// Fetch matched records from table.
router.post('/fetchRecords', (req, res, next) => {
    let { ram, rom, price } = req.body; // destructuring
    res.status(200).json({success: true, message: 'In process', data: {ram, rom, price}});
})

module.exports = router;