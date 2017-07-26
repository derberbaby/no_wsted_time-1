// require mongoose
let mongoose = require('mongoose');
// import models
let Create = mongoose.model('Create');
// exporting and importing this logic into routes
module.exports = {

  new_thing: (req, res) => {
  	console.log(req.body);
    let newThing = new Create(req.body);
    newThing.save( (err, savedThing ) => {
    	if(err) {
    		console.log('back', err);
        	let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
    	}
    	else {
    		return res.json(true);
    	}
    })
  }

}
