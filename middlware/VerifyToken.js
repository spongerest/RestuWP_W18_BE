import jwt from 'jsonwebtoken'

export const verifyJwtToken = async(req,res,next) => {
  try{
      const token = req.cookies.token
      if(!token) return res.status(401).json({mesage: "Unauthorized"})
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
          if(err){
              res.status(401).json({mesage:"Wrong Credentials"})
          }
          req.user = user
      })
      next()
  }catch(err){
      next(err)
  }
}

export const AuthorizeAdminAccess = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
      // Continue to the next middleware or route handler
      next();
  } else {
      return res.status(403).json('Unauthorized: Admin role required');
  }
};