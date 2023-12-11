const db = require("../../src/database/models");

const usersController = {
    list : (req,res) => {
        db.User.findAll()
            .then(user => {
                let result = {
                    
                    meta: {
                        status: 200,
                        count: user.length,
                        url: "/api/users/list"
                    },
                    users: user
                    /*
                    users: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        [],
                        detail: `/api/users/${user.id}`
                    }
                    */
                }
                res.json(result);
            })
    },
    detail: (req,res) => {
        const {id} = req.params;
        db.User.findByPk(id)
            .then(user => {
                let result = {
                    meta : {
                        status: 200,
                        count: 1,
                        url: `/api/users/${id}`
                    },
                    users: user
                    /*
                    url: "imagen del usuario"
                    No mostrar información sensible (password, rol);                    
                    */
                }
                res.json(result);
            })
    }
}

module.exports = usersController;