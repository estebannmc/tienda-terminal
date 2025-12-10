import { auth } from '../config/firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { UserModel } from '../models/user.model.js';

export const register = async (userData) => {
  const { email, password, name } = userData;
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Store additional user data in Firestore
  const newUser = await UserModel.create(user.uid, { name, email });
  return newUser;
};

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const token = await user.getIdToken();
  return { user, token };
};