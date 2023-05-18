
import { appfire } from "../../../config/firebase";
import { collection, addDoc, getDocs, } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { NextUIProvider } from '@nextui-org/react';

const db = getFirestore(appfire);
const docRef = collection(db, "Project")

const getprojects = async (req, res) => {
    const { uid, } = req.query
    const movieRef = collection(db, "Project");
    const q = query(movieRef, where(`${uid}`, "==", `uidMovie`))
    const docSnap = await getDocs(q);
    if (docSnap) {
        let listArra = []
        docSnap.forEach((doc) => {
            console.log(doc.data())
            // doc.data() is never undefined for query doc snapshots
            listArra.push({ id: doc.id, ...doc.data() })
        });
        res.status(200).json({ status: true, projects: listArra })
        return
    } else {
        res.status(400).json({ status: false, msg: 'error get movies' })
        return
    }
}

export default async function project(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method == 'GET') {
        getprojects(req, res)
        return
    }
    res.status(400).json({ satus: false, erro: "erro requisition" })


}
