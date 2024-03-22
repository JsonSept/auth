const mysql = require('mysql2');
const Schema = mysql.Schema;

// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// })

// module.exports = mysql.model('user', userSchema)


// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('mydb', 'root', 'Jayce2605!!!', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// (async () => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');

    // Sync the model with the database
    // await User.sync({ force: true }); // This will create the "users" table

    // You can now use the User model to interact with the users table
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// module.exports = User;
