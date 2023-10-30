module.exports = (sequelize, dataTypes) => {
    const alias = "User_Product";
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
            }*/
        },
        product_id: {
            type: dataTypes.INTEGER,
           /* references: {
                model: Product,
                key: id
            } */
        },
        quantity_purchases: {
            type: dataTypes.INTEGER
        }
    };
    const config = {
        tableName: "users_products",
        timestamps: false
    }

    const UserProduct = sequelize.define(alias,cols,config);

    //Faltan las asociaciones
    
    return UserProduct;
}