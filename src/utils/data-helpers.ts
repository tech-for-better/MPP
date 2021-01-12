import { db } from "../connection.js";

function getData(): any {
  return db
    .collection("users")
    .get()
    .then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
}

getData();

// export {};
