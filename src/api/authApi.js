import db from '../db/firestore'
import firebase from "firebase/app";
import "firebase/auth";

const createUserProfile = userProfile =>
    db.collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile);


export async function register({email, username, password}) {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const avatar = 'http://occ-0-3594-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV2VWp0U7RLGpovyC-VlUl9qie_1JomYMg9CT8GWiBytuDRWTJ77NjAaJ9tCW_ACw8VJAeAG1nx_iRXK8F99DkCN14ZXGMQMr1GZ.png?r=94e'
    const userProfile = {uid: user.uid, username, email, avatar}
    await createUserProfile(userProfile)
    return userProfile;
}

export const login = ({email, password}) =>
    firebase.auth().signInWithEmailAndPassword(email, password)
export const logout = () =>  firebase.auth().signOut();

export const getUserProfile = uid =>
    db
        .collection('profiles')
        .doc(uid)
        .get()
        .then(snanpshot => snanpshot.data())

export const onAuthStateChanges = onAuth =>
    firebase.auth().onAuthStateChanged(onAuth)
