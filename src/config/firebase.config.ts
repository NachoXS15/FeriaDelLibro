import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7OnSc7dJVU6cASwE7IDZm22sf85abNEU",
  authDomain: "feriadellibro-23820.firebaseapp.com",
  projectId: "feriadellibro-23820",
  storageBucket: "feriadellibro-23820.appspot.com",
  messagingSenderId: "128625577866",
  appId: "1:128625577866:web:17e7349e199a7b49c78273",
  measurementId: "G-8X5DL7H1QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}
