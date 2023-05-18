import { appfire } from "../../../../config/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appfire);
const docRef = collection(db, "todo-movies-list")
const postMovie = async (req, res) => {
}
const getMovies = async (req, res) => {
    const { uid } = req.query
    const docSnap = await getDoc(doc(db, "Project", uid));
    if (docSnap.exists()) {
        const docSnap2 = await getDoc(doc(db, "todo-movies-list", docSnap.data().uidMovie));
        if (docSnap2.exists) {
            res.status(200).json({ status: true, dates: { id: docSnap.id, ...docSnap.data(), ...docSnap2.data(), uidMovie: docSnap2.id } })
            return
        }

    } else {
        res.status(400).json({ status: false, msg: 'error get movies' })
        return
    }
}

const deletMovie = async (req, res) => {
    const { uid } = req.query
    await deleteDoc(doc(db, "todo-movies-list", uid)).then((resp) => {
        res.status(200).json({ status: true, msg: 'delete success full' })
        return
    }).catch((e) => {
        res.status(400).json({ status: false, msg: 'error delete movies' })
        return
    })

}
const putMuvie = async (req, res) => {
    const { uid } = req.query
    const {
        nome,
        Designer,
        Director,
        datas
    } = req.body
    console.log(nome,
        Designer,
        Director,
        datas,
        uid

    )
    updateDoc(doc(db, "Project", uid), {
        nome: nome || "",
        Designer: Designer || [],
        Director: Director || [],
        datas: datas || ""
    }).then((resp) => {
        res.status(200).json({ status: true, msg: 'success update' })
        return
    }).catch((error) => {
        res.status(400).json({ status: false, msg: 'error update' })
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
    if (req.method == 'POST') {
        postMovie(req, res)
        return
    }
    if (req.method == 'GET') {
        getMovies(req, res)
        return
    }
    if (req.method == 'PUT') {
        putMuvie(req, res)
        return
    }
    if (req.method == 'DELETE') {
        deletMovie(req, res)
        return
    }
    res.status(400).json({ satus: false, erro: "erro requisition" })


}
