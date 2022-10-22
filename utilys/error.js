import jwt from "jsonwebtoken"

export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

// export const checkToken = (req, res, next) => {
//     const token = req.cookies.access_token;
//     if(!token){
//         return next(createError(401, "You are not authenticated"));
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if(err) return next(createError(403, "Token is not Valid"));
//         req.user = user;
//         next()
//     });
// };