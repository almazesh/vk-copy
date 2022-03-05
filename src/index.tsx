import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as firebase from "firebase/app";
import { AuthProvider } from './components/providers/AuthProviders';
  
firebase.initializeApp({
  apiKey: "AIzaSyDCH1iCemtrKmIYXppazKEzAxM1rvP6_EQ",
  authDomain: "fire-todo-7db3a.firebaseapp.com",
  databaseURL: "https://fire-todo-7db3a-default-rtdb.firebaseio.com",
  projectId: "fire-todo-7db3a",
  storageBucket: "fire-todo-7db3a.appspot.com",
  messagingSenderId: "1008989120892",
  appId: "1:1008989120892:web:0ee06056706bf380179cf9"
})


ReactDOM.render(
    <BrowserRouter>
      <AuthProvider >
        <App />
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
