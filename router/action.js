const express = require('express');
const Action = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  Action.get()
    .then(action => {
      res.status(200).json({data: action});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Action.get(id)
    .then(action => {
      res.status(200).json({data: action});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.post('/', (req, res) => {
  const data = req.body;
  Action.insert(data)
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

  Action.update(id, changes)
    .then(action => {
      res.status(200).json({action});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  Action.remove(id)
    .then(action => {
      res.status(200).json({action});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
