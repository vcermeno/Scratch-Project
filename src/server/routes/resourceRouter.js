const express =  require('express');
const resourceController = require('../controllers/resourceController');
const router = express.Router();

// Get an array of resource objects and return them
//  resourceController.getResources,
router.get("/:name", resourceController.getResources, (req, res) => {
  console.log("eofjiehkrsndslkf");
  return res.status(200).json(res.locals.resources);
});

// Add new resource to the database and return the new list of resources
router.post('/:name', resourceController.getTechId, resourceController.addResource, resourceController.getResources, (req,res) => {
  return res.status(200).json(res.locals.resources);
});

// We can do the voting two different ways: backend logic or front end logic

// Subtract a like and return the new list of resources
// router.put('/:name/upvote', resourceController.addLike, resourceController.getResources, (req,res) =>{
//   return res.status(200).json(res.locals.resources)
// });

// // Add a like and return the new list of resources
// router.put('/:name/downvote', resourceController.subtractLike, resourceController.getResources, (req,res) =>{
//   return res.status(200).json(res.locals.resources)
// });

module.exports = router;