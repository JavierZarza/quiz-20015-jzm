/**
 * Created by javier on 12/06/15.
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {pregunta: DataTypes.STRING,
         respuesta: DataTypes.STRING
        });
}