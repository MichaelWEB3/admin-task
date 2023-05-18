import { appfire } from "../../../../config/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appfire);
//const docRef = collection(db, "todo-movies-list", uid)
const postMovie = async (req, res) => {
    const { uid } = req.query
    const {
        status
    } = req.body
    console.log(status)
    if (status == true) {
        await updateDoc(doc(db, "todo-movies-list", uid), {
            status: true
        }).then((resp) => {
            res.status(200).json({ status: true, msg: "status atualizado com sucesso" })
            return
        }).catch((e) => {
            res.status(400).json({ status: false, erro: "erro request status" })
            return
        })
    }
    if (status == false) {
        await updateDoc(doc(db, "todo-movies-list", uid), {
            status: false
        }).then((resp) => {
            res.status(200).json({ status: true, msg: "status atualizado com sucesso" })
            return
        }).catch((e) => {
            res.status(400).json({ status: false, erro: "erro request status" })
            return
        })
    }

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
    if (req.method == 'POST') {
        postMovie(req, res)
        return
    }

    res.status(400).json({ status: false, erro: "erro requisition" })


}
