const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:medicineName', (req, res) => {
  const { medicineName } = req.params;
  const imagePathJpg = path.join(__dirname, `../public/images/${medicineName}.jpg`);
  const imagePathPng = path.join(__dirname, `../public/images/${medicineName}.png`);

  fs.access(imagePathJpg, fs.constants.F_OK, (err) => {
    if (err) {
      fs.access(imagePathPng, fs.constants.F_OK, (err) => {
        if (err) {
          console.log(err);
          res.status(404).send('Image not found');
        } else {
          res.sendFile(imagePathPng);
        }
      });
    } else {
      res.sendFile(imagePathJpg);
    }
  });
});

module.exports = router;
