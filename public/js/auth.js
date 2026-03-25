import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

/* 🔐 MONITOR */
export function checkAuth(callback) {
    onAuthStateChanged(auth, async (user) => {
        if (user) await saveUser(user);
        callback(user);
    });
}

/* 💾 SALVAR */
async function saveUser(user) {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            name: user.displayName || "",
            photo: user.photoURL || "",
            createdAt: new Date()
        });
    }
}

/* 🚪 LOGOUT */
export function logout() {
    return signOut(auth);
}

/* 🔵 FACEBOOK LOGIN */
export async function loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
}