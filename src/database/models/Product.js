module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.DECIMAL(3,1)
        },
        description: {
            type: dataTypes.STRING(255)
        },
        image: {
            type: dataTypes.STRING(255)
        },
        availability: {
            type: dataTypes.BOOLEAN
        },
        amount: {
            type: dataTypes.INTEGER
        },
        cartSale: {
            type: dataTypes.BOOLEAN
        },
        category: {
            type: dataTypes.STRING(255)
        },
        gender: {
            type: dataTypes.STRING(30)
        },
        discount: {
            type: dataTypes.INTEGER
        },
        offer: {
            type: dataTypes.INTEGER
        } 
    };
    const config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias,cols,config);
    Product.associate = (models) => {
        Product.belongsToMany(models.User, {
            as: "users",
            through: "users_products",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false
        })
    }
    return Product;
}