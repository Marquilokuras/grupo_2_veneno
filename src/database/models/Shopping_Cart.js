module.exports = (sequelize, dataTypes) => {
    const alias = "Shopping_Cart";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user_id: {
            type: dataTypes.INTEGER,
           /* references: {
                model: User,
                key: id
            } */

        },
        product_id: {
            type: dataTypes.INTEGER,
            /*references: {
                model: Product,
                key: id
            }*/
        },
        amount: {
            type: dataTypes.INTEGER,
        },
        price: {
            type: dataTypes.DECIMAL(3,1)
        },
        gift: {
            type: dataTypes.BOOLEAN
        },
        address: {
            type: dataTypes.STRING(255)
        }
    };
    const config = {
        tableName: "shopping_carts",
        timestamps: false
    };

    const ShoppingCart = sequelize.define(alias,cols,config);

    //Faltan las asociaciones

    return ShoppingCart;
}