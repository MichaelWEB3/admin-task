import { appfire } from "../../../../config/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appfire);
const docRef = collection(db, "submitTask")

const putMuvie = async (req, res) => {
    const { uid } = req.query
    const {
        status
    } = req.body
    console.log(status)
    updateDoc(doc(db, "submitTask", uid), {
        status: status || ""
    }).then((resp) => {
        res.status(200).json({ status: true, msg: 'success set movie' })
        return
    }).catch((error) => {
        res.status(400).json({ status: false, msg: 'error set movie' })
        return
    })
}
export default async function Movie(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method == 'PUT') {
        putMuvie(req, res)
        return
    }

    res.status(400).json({ satus: false, erro: "erro requisition" })


}
