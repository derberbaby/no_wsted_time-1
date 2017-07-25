let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CreateSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Select a category."],
  },
  title: {
  	type: String,
  	required: [true, "Please enter a title."],
  	trim: true
  },
  start_date: {
  	type: Date,
  	required: [true, "Please enter a start date"]
  },
  end_date: {
    type: Date,
    required: [true, "Please enter an end date"]
  },
  description: {
  	type: String
  },
  _Owners: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
  _Members: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
  _Invitees: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }]
},
   {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

let Create = mongoose.model('Create', CreateSchema);
