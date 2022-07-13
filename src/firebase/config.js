import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_RDlRk5HFYemlAVZGyctTP9PaJNwiMjM",
  authDomain: "sample-9a0d6.firebaseapp.com",
  databaseURL: "https://sample-9a0d6-default-rtdb.firebaseio.com",
  projectId: "sample-9a0d6",
  storageBucket: "sample-9a0d6.appspot.com",
  messagingSenderId: "360059399902",
  appId: "1:360059399902:web:5de123139da4e43e7bdc4f"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);