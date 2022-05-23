const User = require('../../app/models/User');



class UserService{
static create (id,username,name){
    return new User(id,username,name,"Sin bio")
}

static getInfo (user){
  return Object.values(user)
}

static updateBio(user, bio){
    user.setBio = bio
  }
  
static updateUserUsername(user,newUser){
    user.username=newUser
    

}

static getAllUsernames(users){
const usernames = users.map(item => item.username)

return usernames

}

}

module.exports=UserService

