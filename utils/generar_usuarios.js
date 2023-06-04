const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const salt = bcrypt.genSaltSync();

const guardarUsuarios = async () => {
  try {
    await Usuario.deleteMany(); // Eliminar todos los usuarios existentes

    let usu1 = new Usuario({
      name: 'Test1',
      email: 'test1@test.com',
      password: '123456'
    });
    usu1.password = bcrypt.hashSync(usu1.password, salt);
    await usu1.save();

    let usu2 = new Usuario({
      name: 'Test2',
      email: 'test2@test.com',
      password: '123456'
    });
    usu2.password = bcrypt.hashSync(usu2.password, salt);
    await usu2.save();

    let usu3 = new Usuario({
      name: 'Test3',
      email: 'test3@test.com',
      password: '123456'
    });
    usu3.password = bcrypt.hashSync(usu3.password, salt);
    await usu3.save();

    console.log('Usuarios guardados con éxito');
  } catch (error) {
    console.error('Error al guardar los usuarios:', error);
  }
};

guardarUsuarios();