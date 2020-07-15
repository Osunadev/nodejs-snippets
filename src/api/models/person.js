const validator = require('validator');
const { model, Schema } = require('mongoose');

// mongoose comes already with some built-in validators such as min, max, enum, etc..
// Also it comes with some schema options like required, trim, etc...
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 115,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    enum: ['Male', 'Female', 'Not specified'],
    default: 'Not specified',
  },
  height: {
    type: Number,
    required: true,
    min: 15,
    max: 220,
  },
  country_code: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    // This is a custom validator
    validate(value) {
      // If it's not an standard country code, like 'MX"
      if (!validator.isISO31661Alpha2(value)) {
        throw new Error('Not valid country code');
      }
    },
  },
  civil_status: {
    type: String,
    trim: true,
    enum: ['Single', 'Married', 'Divorced', 'Widowed'],
    default: 'Single',
  },
});

const Person = model('Person', PersonSchema);

module.exports = Person;
