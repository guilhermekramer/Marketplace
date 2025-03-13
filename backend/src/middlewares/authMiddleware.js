import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    console.log("entrou no try")
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ message: 'JWT secret is not defined.' });
    }


    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
    
  } catch (err) {
    res.status(400).json({ message: 'Token inválido.', err,  });
  }
};

export default authMiddleware;