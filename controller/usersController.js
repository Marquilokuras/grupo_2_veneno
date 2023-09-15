const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../data/users.json')
const usersFilePath = path.join(__dirname, '..','data','users.json');

const usersController = {
    renderLogin : (req, res) => {
        res.render('login');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    createUser: async (req,res) =>{
        try {
            console.log(req.body)
            const { id, nombre, apellido, email, password,passwordVerify, genero, foto, fecha_nacimiento, edad, direccion } = req.body;
            const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            const existingUser = users.find((user) => user.email === email);

            if (existingUser) {
              return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
            }

            if (password !== passwordVerify) {
              return res.status(400).json({ message: 'Las contraseñas no coinciden' });
            }

            let hashedPassword = await bcrypt.hash(password, 10);

            if(foto === null){
                foto = "/img/usuario.png";
            }

            const newUser = {
              id:  (users.length + 1).toString(),
              nombre,
              apellido,
              email,
              password: hashedPassword,
              genero,
              foto,
              fecha_nacimiento,
              edad,
              direccion,
            };
        
            users.push(newUser);
        
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2)); 
            res.redirect('/login')

          } catch (error) {
            console.error(error);
            res.redirect('/users/register')
          }
       
    }
};

module.exports = usersController;