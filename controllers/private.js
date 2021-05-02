const User = require('../models/User');
exports.getPrivateData = (req, res, next) => {
    User.find({}, function(err, users){
        if(err){
          res.send('something went wrong');     
          next();
        }
        
        
         res.status(200).json(
             users

          )
    })
   
        
    
};