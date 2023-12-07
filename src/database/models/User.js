module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        lastname: {
            type: dataTypes.STRING(255)
        },
        /* username: {
            type: dataTypes.STRING(255)
        }, */
        email: {
            type: dataTypes.STRING(255)
        },
        password: {
            type: dataTypes.STRING(255)
        },
        gender: {
            type: dataTypes.STRING(30)
        },
        image: {
            type: dataTypes.STRING(255)
        },
        age: {
            type: dataTypes.INTEGER(100)
        },
        address: {
            type: dataTypes.TEXT(255)
        },
        role: {
            type: dataTypes.STRING(100)
        }
    };
    const config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias,cols,config);
    
    User.associate = (models) => {
        User.belongsToMany(models.Product, {
            as: "products",
            through: "users_products",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false
        })
    }
    return User;
}