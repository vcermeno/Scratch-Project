const db = require('./../models/resourceModels');

// Initialize controller object
const resourceController = {};

let item = '';
// Get all resources from the db based on tech 
resourceController.getResources = (req, res, next) => {
    console.log("in get resources");
    let tech_name = req.params.name;
    console.log('tech name   ', tech_name);
    item = `SELECT * FROM resources JOIN techs ON techs._id = resources.tech_id WHERE techs.tech = '${tech_name}' ORDER BY likes;`
    db.query(item)
    .then(query => {
        res.locals.resources = query.rows;
        return next();
    })
    .catch(err => next({
        log: 'ERROR in resourceControllers.getResources',
        message: {err: `ERROR in getResources ${err}`}
    }))
}

// Get's the tech id (from post tech name in the request body) to be used in adding a resource
resourceController.getTechId = (req, res, next) => {
    let tech = req.params.name;
    item = `SELECT _id FROM techs WHERE tech = '${tech}'`
    db.query(item)
    .then(query => {
        res.locals.techId = query.rows;
        return next();
    })
    .catch(err => next({
        log: 'ERROR IN resourceControllers.getTechId',
        message: {err: `ERROR in getTechId ${err}`}
    }))
}

// Creates a new resource by combining a tech id and the request body info
resourceController.addResource = (req, res, next) => {
    console.log("IN add resource");
    let techId = res.locals.techId;
    console.log('techId', techId); // this is producing undefined
    let { name, description, url }= req.body; // these params are not in 
    item = `INSERT INTO resources (name, description, url, likes, tech_id)
    VALUES ('${name}', '${description}', '${url}', 0, ${techId});` // currently returning => VALUES ('undefined', 'undefined', 'undefined', 0, undefined);
    db.query(item)
    .then(query => {
        res.locals.resources = query.rows;
        return next();
    })
    .catch(err => next({
        log: 'ERROR in resourceControllers.getResources',
        message: {err: `ERROR in getResources ${err}`}
    }))
}

module.exports = resourceController;