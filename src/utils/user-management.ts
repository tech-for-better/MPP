import { auth } from "../connection";

// signup
const signup = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

//  login

const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};
//  signinwithgoogle
const signInWithGoogle = () => {
  var provider = new auth.GoogleAuthProvider();
  auth().signInWithRedirect(provider);
};

// persistence - remember me
const rememberMe = () => {
  auth().setPersistence(auth.Auth.Persistence.LOCAL);
};
// firebase.auth().setPersistence(this.remember.checked ? fireauth.Auth.Persistence.LOCAL : fireauth.Auth.Persistence.SESSION);

//  sign out
const signout = () => {
  auth().signOut();
};

export { signup, login, signInWithGoogle, rememberMe, signout };
