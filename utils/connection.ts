import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { PrismaClient } from "@prisma/client";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyPR7eJZzceXk057YpgNPI2RVUAMECsA0",
  authDomain: "t-shirt-fancy-creator.firebaseapp.com",
  projectId: "t-shirt-fancy-creator",
  storageBucket: "t-shirt-fancy-creator.appspot.com",
  messagingSenderId: "763339382921",
  appId: "1:763339382921:web:04341d9b0e338c5a8fa658",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const mainStorageBranch = ref(storage, "collection");

const prisma = new PrismaClient();

export { prisma, storage, mainStorageBranch };
