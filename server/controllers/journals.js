// require mongoose
let mongoose = require('mongoose');
// import models
let Journal = mongoose.model('Journal');
let User = mongoose.model('User');
// exporting and importing this logic into routes
module.exports = {

  newEntry: (req, res) => {
    console.log("YAYYY");
    if (req.session.user_id) {
        let newJournal = new Journal(req.body);
        User.findOne({_id:req.session.user_id}, (err, user) => {

            if (err) {
                console.log('ERROR', err);
                let errors = [];
                for (let i in err.errors) {
                    errors.push(err.errors[i].message);
                }
            return res.status(400).send(errors);
        }

        else {
            newJournal._User = req.session.user_id;
            newJournal.save ( (err, savedJournal) => {
            if (err) {
                console.log('ERROR', err);
                let errors = [];
                for (let i in err.errors) {
                    errors.push(err.errors[i].message);
                }
            return res.status(400).send(errors);
            } else {
                console.log("SAVED", savedJournal);
                user.journal.push(newJournal);
                user.save ( ( err, savedUser) => {
                    if (err) {
                        console.log('ERROR', err);
                        let errors = [];
                        for (let i in err.errors) {
                            errors.push(err.errors[i].message);
                        }
                    return res.status(400).send(errors);
            } else {
                console.log("SAVED USER", savedUser);
                return res.json(true);
            }
        })
        }
            })
        }
        })
    }
    }
}