import { appfire } from "../../../../config/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, where, query, orderBy } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(appfire);

const getMyMovies = async (req, res) => {
    const { office, responsible } = req.query
    const movieRef = collection(db, "Project");
    const q = office == "Producer" ? query(movieRef, where(`${office}`, "==", `${responsible}`)) : query(movieRef, where(`${office}`, "array-contains", `${responsible}`))
    const docSnap = await getDocs(q);
    if (docSnap) {
        let listArra = []
        docSnap.forEach((doc) => {
            console.log(doc.data())
            // doc.data() is never undefined for query doc snapshots
            listArra.push({ id: doc.id, ...doc.data() })
        });

        let newArray = listArra.sort((a, b) => {
            const nameA = a.uidMovie.toUpperCase();
            const nameB = b.uidMovie.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        console.log(newArray)
        res.status(200).json({ status: true, dates: newArray })
        return
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
        getMyMovies(req, res)
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
