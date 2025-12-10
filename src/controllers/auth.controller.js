import { register, login } from '../services/auth.service.js';

export const registerUser = async (req, res, next) => {
  try {
    const user = await register(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await login(email, password);
    res.json({ message: 'Logged in successfully', user, token });
  } catch (error) {
    next(error);
  }
};
