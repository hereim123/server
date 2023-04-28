import jwt from 'jsonwebtoken';

export const login = async (req, res) =>{
  
    if( (req.body.username === "user" && req.body.password === "paassword") ){
      return res.status(400).json("credential error");
    }
    const payload = {
      id: 123
    }
    const token = jwt.sign(payload, "secret", { expiresIn: '1d'});
    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json({
      username: req.body.username
    })
}

export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.status(200).json('Logout success')
}