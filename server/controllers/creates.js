// require mongoose
let mongoose = require('mongoose');
// import models
let Create = mongoose.model('Create');
let User = mongoose.model('User');
// exporting and importing this logic into routes
module.exports = {

  new_thing: (req, res) => {
    console.log(req.body);
    if (req.session.user_id) {
        let newThing = new Create(req.body);
        newThing._Owners.push(req.session.user_id);
        newThing._Members.push(req.session.user_id);
        newThing.save( (err, savedThing) => {
            if (err) {
                console.log('back', err);
                let errors = [];
                for (let i in err.errors) {
                    errors.push(err.errors[i].message);
                }
                return res.status(400).send(errors);
            }
            else {
                User.findOne({_id: req.session.user_id}, (err, user) => {
                    if (err) {
                        console.log('back', err);
                        let errors = [];
                        for (let i in err.errors) {
                            errors.push(err.errors[i].message);
                        }
                        return res.status(400).send(errors);
                    }
                    else {
                        user.hosting.push(savedThing);
                        user.attending.push(savedThing);
                        user.save( (err, savedUser) => {
                            if (err) {
                                console.log('back', err);
                                let errors = [];
                                for (let i in err.errors) {
                                    errors.push(err.errors[i].message);
                                }
                                return res.status(400).send(errors);
                            }
                            else {
                                return res.json(savedUser);
                            }
                        })
                    }
                })
            }
        })
    }
}
}
