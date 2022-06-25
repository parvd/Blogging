const db = require('../db');
//User constructor
function User ({
  username, 
  email, 
  password, 
  bio=`Hi, I am ${username}`
}) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.bio = bio;
};
// add a createUser method to the prototype
User.prototype.createUser = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO users(username, email, password, bio, access,question) 
            VALUES ($1, $2, $3, $4, $5)`,
            [this.username, this.email, this.password, this.bio, this.access,this.question]
        );
        return rows; 
    } catch (error) {
        console.log(error)
        throw error;
    }
};
module.exports = User;
// db.query: the query method we exported earlier from db/index.js

module.exports = (sequelize, Sequelize) => {
    const User1 = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      access: {
        type: Sequelize.STRING
      }
    });
    return User1;
  };