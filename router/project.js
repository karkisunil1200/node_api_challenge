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

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Project.get(id)
    .then(project => {
      res.status(200).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id/actions', (req, res) => {
  const {id} = req.params;

  Project.getProjectActions(id)
    .then(action => {
      res.status(200).json({data: action});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.post('/', (req, res) => {
  const data = req.body;
  Project.insert(data)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Project.update(id, changes)
    .then(project => {
      res.status(200).json({project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  Project.remove(id)
    .then(project => {
      res.status(200).json({project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
