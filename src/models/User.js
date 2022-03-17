const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {type: String, required: [true, 'El nombre es necesario']},
  appat: {type: String, required: [true, 'El apellido paterno es necesario']},
  apmat: {type: String, required: [true, 'El apellido materno es necesario']},
  email: {type: String, required: [true, 'El email es necesario'], unique: true},
  username: {type: String, required: [true, 'El nombre de usuario es necesario'], unique: true},
  password: {type: String, required: [true, 'El password es necesario']}
}, {
  timestamps: true
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema);
