
import { appfire } from "../../../config/firebase";
import { doc, getDoc, setDoc, getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(appfire);

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
    if (req.method == 'GET') {
        // Obtenha uma referência para o banco de dados

        // Defina a data inicial e final para os últimos sete dias
        const dataFinal = new Date();
        const dataInicial = new Date();
        dataInicial.setDate(dataInicial.getDate() - 7);
        console.log(dataFinal)
        // Converta as datas para o formato adequado para consulta no Firebase
        // Formate as datas para o formato "aaaa-mm-dd"
        const dataFinalFormatada = formatarData(dataFinal);
        const dataInicialFormatada = formatarData(dataInicial);

        // Função para formatar a data no formato "aaaa-mm-dd"
        function formatarData(data) {
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            return `${ano}-${mes}-${dia}`;
        }


        const movieRef = collection(db, "submitTask");
        const q = query(movieRef, where('startDate', '>=', dataInicialFormatada), where('startDate', '<=', dataFinalFormatada))
        const docSnap = await getDocs(q);
        let list = []
        if (docSnap) {
            docSnap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                list.push({ id: doc.id, ...doc.data() })
            });
            res.status(200).json({ status: true, list })
        } else {
            res.status(400).json({ erro: "erro requisition" })

        }

    } else {
        res.status(400).json({ erro: "erro requisition" })
    }

}
