import { db } from "../config/firebase.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const usersCol = collection(db, "users");

export const UserModel = {
  async create(uid, data) {
    await setDoc(doc(usersCol, uid), data);
    return { uid, ...data };
  },

  async findById(uid) {
    const userDoc = await getDoc(doc(usersCol, uid));
    if (userDoc.exists()) {
      return { uid: userDoc.id, ...userDoc.data() };
    }
    return null;
  }
};