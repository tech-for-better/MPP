// import { db, auth } from "../connection.js";
import "firebase/firestore";
import { signUp } from "./user-management";

// function signupDb() {
//   signUp().then(() => {
//     db.collection("users").doc(username).set({ username: username, email: email});
//   });

//  email:
// db.collection("users").doc("username").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// })
// .then(function() {
//   console.log("Document successfully written!");
// })
// .catch(function(error) {
//   console.error("Error writing document: ", error);
// });
// }

// export {signupDb};
