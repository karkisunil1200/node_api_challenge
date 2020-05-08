const express = require('express');
const Project = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  Project.get()
    .then(project => {
      res.status(200).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
