import { db } from "../config/firebase.js";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const productsCol = collection(db, "products");

export const ProductModel = {
  async findAll() {
    const snap = await getDocs(productsCol);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async findById(id) {
    const ref = doc(db, "products", id);
    const d = await getDoc(ref);
    return d.exists() ? { id: d.id, ...d.data() } : null;
  },

  async create(data) {
    const created = await addDoc(productsCol, data);
    return { id: created.id, ...data };
  },

  async update(id, data) {
    const ref = doc(db, "products", id);
    await updateDoc(ref, data);
    return { id, ...data };
  },

  async remove(id) {
    const ref = doc(db, "products", id);
    await deleteDoc(ref);
    return { id };
  }
};