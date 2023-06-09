
import { appfire } from "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

export default async function Create(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    const { email, password, name, office } = req.body
    if (req.method == 'POST') {
        const auth = getAuth(appfire)
        const db = getFirestore(appfire);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const docRef = doc(db, "users", userCredential.user.uid);
                setDoc(doc(db, "users", userCredential.user.uid), {
                    name,
                    email,
                    office
                }).then((resp) => {
                    res.status(200).json({ uid: userCredential.user.uid })
                })

            }).catch((error) => {
                res.status(405).json({ erro: `${error.message}` })
            })
    } else {
        res.status(400).json({ erro: "erro requisition" })
    }

}
