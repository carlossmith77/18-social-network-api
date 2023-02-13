const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: Array,
    friends:Array
  }
  /*,
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  */
);
/*
userSchema
  .virtual('fullName')
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });
*/
const User = model('user', userSchema);

module.exports = User;