
import { getAuth, updateEmail, updatePassword } from 'firebase-admin/auth';
import admin from "../../../config/firebaseAdmin";
import { doc, updateDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { appfire } from '../../../config/firebase';

export default async function GetUsers(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    const db = getFirestore(appfire);

    console.log(req.body.email, req.body.senha, req.body.uid)
    try {
        await admin.auth().deleteUser(req.body.uid);
        await deleteDoc(doc(db, "users", req.body.uid)).then((resp) => {
            res.status(200).json({ status: true, msg: 'success set movie' })
            return
        }).catch((error) => {
            res.status(400).json({ status: false, msg: 'error set movie' })
            return
        })

        console.log('Informações do usuário atualizadas com sucesso!');
        res.status(200).json({ status: true })

    } catch (error) {
        console.error('Erro ao atualizar informações do usuário:', error);
        res.status(400).json({ status: false })

    }

}
