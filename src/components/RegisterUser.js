import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import bcrypt from "bcryptjs";
import axios from "axios";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID]
};

function RegisterUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const CreateAccount = async () => {
    // const salt = await bcrypt.genSalt(10);
    // const encPass = await bcrypt.hash(password, salt);
    // var ref = await firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(firebase.auth().currentUser.uid);
    // var addDoc = false;

    // await ref
    //   .get()
    //   .then(doc => {
    //     if (!doc.exists) {
    //       console.log("No such document!");
    //       addDoc = true;
    //     } else {
    //       console.log("Document data:", doc.data());
    //     }
    //   })
    //   .catch(err => {
    //     console.log("Error getting document", err);
    //   });

    const data = await axios.post(`http://localhost:5000/api/users`, {
      uid: firebase.auth().currentUser.uid,
      name: name,
      phoneNumber: firebase.auth().currentUser.phoneNumber,
      password: password,
      avatarUrl:
        "//www.gravatar.com/avatar/7c3757fa42aae688de7244aadfdf5110?s=200&r=pg&d=mm"
    });

    console.log(data);
    // await firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(firebase.auth().currentUser.uid)
    //   .set({
    //     avatarUrl:
    //       "//www.gravatar.com/avatar/7c3757fa42aae688de7244aadfdf5110?s=200&r=pg&d=mm",
    //     name: name,
    //     password: encPass,
    //     phoneNumber: firebase.auth().currentUser.phoneNumber
    //   });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <p>Verify your number here</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={event => {
          setName(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        onChange={event => {
          setPassword(event.target.value);
          console.log(event.target.value);
        }}
        type='text'
        value={password}
        placeholder='Password'
      />

      <button onClick={CreateAccount}>Create Account</button>
    </div>
  );
}

export default RegisterUser;
