
import { appfire } from "../../../config/firebase";
import { collection, addDoc, getDocs, } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appfire);
const docRef = collection(db, "todo-movies-list")
const postMovie = async (req, res) => {
    const {
        ProjectID,
        Product,
        AnimationLevel,
        Style,
        Aspect,
        Timezone,
        Designer,
        Director,
        Producer,
        Techinique,
        startDate,
        audioEnginer,
        datas,




    } = req.body

    addDoc(docRef, {
        ProjectID: [],
        Product: Product || "",
        AnimationLevel: AnimationLevel || "",
        Style: Style || "",
        Aspect: Aspect || "",
        Timezone: Timezone || "",
        Producer: Producer || "",
        Techinique: Techinique || "",
        startDate: startDate || "",
        datas: datas || "",
        audioEnginer: audioEnginer || "",

        ProjectIDList: []
    }).then((resp) => {
        res.status(200).json({ status: true, msg: 'success set movie', id: resp.id })
        return
    }).catch((error) => {
        res.status(400).json({ status: false, msg: 'error set movie' })
        return
    })
}
const getMovies = async (req, res) => {
    const querySnapshot = await getDocs(collection(db, "todo-movies-list"));
    let list = []

    querySnapshot.forEach((docu) => {
        list.push({ id: docu.id, ...docu.data() })
    })

    if (list) res.status(200).json({ status: true, list })
    if (!list) res.status(400).json({ status: false, msg: 'error get movies' })

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
    res.status(400).json({ satus: false, erro: "erro requisition" })


}
