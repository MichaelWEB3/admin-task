import React, { useEffect, useState } from "react";
//import useDados from "../../../datehook/userHook";
//import router from 'next/router'
import axios from "axios";
//import { FiAlertCircle } from "react-icons/fi";
import CardBody from "./cardbody";

export default function Card({ users }) {
  const [meusProjects, setmeusProjects] = useState(null);
  useEffect(() => {
    GetMyProjects();
  }, []);
  const GetMyProjects = async () => {
    await axios
      .get(`/api/project/oneProject`, {
        params: {
          office: users.office,
          responsible: `${users.name.trim().toLowerCase()} - ${users.email
            .trim()
            .toLowerCase()}`,
        },
      })
      .then((resp) => {
        setmeusProjects(removerDuplicados(resp.data.dates));
      })
      .catch((e) => {
        alert("error requisition");
      });
  };
  function removerDuplicados(array) {
    const objetosUnicos = [];
    const rastreador = {};
    for (let i = 0; i < array.length; i++) {
      const objeto = array[i];
      const chave = objeto.uidMovie;

      if (!rastreador[chave]) {
        rastreador[chave] = true;
        objetosUnicos.push(objeto);
      }
    }
    return objetosUnicos;
  }

  return (
    <div className="border border-gray-800 rounded  flex flex-col ">
      <span className="font-bold uppercase">{users.name}</span>
      <ul>
        {meusProjects?.map((r, i) => {
          return <CardBody key={i} users={users} projectI={r} />;
        })}
      </ul>
    </div>
  );
}
