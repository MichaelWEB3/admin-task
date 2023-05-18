import { appfire } from "../../../../config/firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(appfire);
const docRef = collection(db, "todo-movies-list")
const postMovie = async (req, res) => {

}
const getMovies = async (req, res) => {
    const { uid } = req.query
    const docSnap = await getDoc(doc(db, "todo-movies-list", uid));
    if (docSnap.exists()) {
        const movieRef = collection(db, "Project");
        const q = query(movieRef, where(`uidMovie`, "==", `${docSnap.id}`))
        const docSnap2 = await getDocs(q);
        let listArra = []
        if (docSnap2) {
            docSnap2.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                listArra.push({ id: doc.id, ...doc.data() })
            });
        }
        res.status(200).json({ status: true, dates: { id: docSnap.id, ...docSnap.data(), projects: listArra } })
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
const putMuvie = async (req, res) => {
    const { uid, office } = req.query
    const {
        ProjectIDList,
        Product,
        AnimationLevel,
        Style,
        Aspect,
        Timezone,

        Producer,
        Techinique,
        startDate,
        audioEnginer,
        datas,

        NumberofScenes,
        NumberofLocation,
        NumberofMainCharacters,
        NumberofBGCharacters,
        noteDirectorMovieInfo,

        DPendingDirecot,
        DNewDirecot,
        ModelsPendingDirecot,
        ModelsNewDirecot,
        AnimPendingDirecot,
        AnimNewDirecot,
        AEPendingDirecot,
        AENewDirecot,
        RotoPendingDirecot,
        RotoNewDirecot,
        DemoPendingDirecot,
        DemoNewDirecot,
        CompPendingDirecot,
        CompNewDirecot,
        noteDirecot,

        DPendingDesigner,
        DNewDesigner,
        ModelsPendingDesigner,
        ModelsNewDesigner,
        AnimPendingDesigner,
        AnimNewDesigner,
        AEPendingDesigner,
        AENewDesigner,
        RotoPendingDesigner,
        RotoNewDesigner,
        DemoPendingDesigner,
        DemoNewDesigner,
        CompPendingDesigner,
        CompNewDesigner,
        noteDesigner,


        STDirecot,
        STDesigner
    } = req.body
    if (office == 'Producer') {
        updateDoc(doc(db, "todo-movies-list", uid), {
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
        }).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
            return
        })
    }
    if (office == 'Director1') {
        updateDoc(doc(db, "Project", uid), {
            NumberofScenes: NumberofScenes || "",
            NumberofLocation: NumberofLocation || "",
            NumberofMainCharacters: NumberofMainCharacters || "",
            NumberofBGCharacters: NumberofBGCharacters || "",
            noteDirectorMovieInfo: noteDirectorMovieInfo || "",
        }).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
            return
        })
    }
    if (office == 'Project') {
        updateDoc(doc(db, "Project", uid), {
            ProjectList: [...ProjectIDList]
        }).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
            return
        })
    }
    if (office == 'Director') {
        updateDoc(doc(db, "Project", uid), {
            DPendingDirecot: DPendingDirecot || "",
            DNewDirecot: DNewDirecot || "",
            ModelsPendingDirecot: ModelsPendingDirecot || "",
            ModelsNewDirecot: ModelsNewDirecot || "",
            AnimPendingDirecot: AnimPendingDirecot || "",
            AnimNewDirecot: AnimNewDirecot || "",
            AEPendingDirecot: AEPendingDirecot || "",
            AENewDirecot: AENewDirecot || "",
            RotoPendingDirecot: RotoPendingDirecot || "",
            RotoNewDirecot: RotoNewDirecot || "",
            DemoPendingDirecot: DemoPendingDirecot || "",
            DemoNewDirecot: DemoNewDirecot || "",
            CompPendingDirecot: CompPendingDirecot || "",
            CompNewDirecot: CompNewDirecot || "",
            noteDirecot: noteDirecot || "",
            STDirecot: STDirecot || ""
        }).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
            return
        })
    }

    if (office == 'Designer') {
        updateDoc(doc(db, "Project", uid), {
            DPendingDesigner: DPendingDesigner || "",
            DNewDesigner: DNewDesigner || "",
            ModelsPendingDesigner: ModelsPendingDesigner || "",
            ModelsNewDesigner: ModelsNewDesigner || "",
            AnimPendingDesigner: AnimPendingDesigner || "",
            AnimNewDesigner: AnimNewDesigner || "",
            AEPendingDesigner: AEPendingDesigner || "",
            AENewDesigner: AENewDesigner || "",
            RotoPendingDesigner: RotoPendingDesigner || "",
            RotoNewDesigner: RotoNewDesigner || "",
            DemoPendingDesigner: DemoPendingDesigner || "",
            DemoNewDesigner: DemoNewDesigner || "",
            CompPendingDesigner: CompPendingDesigner || "",
            CompNewDesigner: CompNewDesigner || "",
            noteDesigner: noteDesigner || "",
            STDesigner: STDesigner || ""
        }).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
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
