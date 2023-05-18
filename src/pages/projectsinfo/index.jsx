import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import axios from "axios";
import Card from "../../components/card";

export default function Projectsinfo() {
  const [users, setUsers] = useState(null);

  const getAllUsers = async () => {
    await axios
      .get("/api/getUsers")
      .then((resp) => {
        setUsers(resp.data.list);
      })
      .catch((e) => {
        alert("erro de requisição");
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <section className="w-full bg-gray-200 flex flex-col">
      <Menu propSelect={"projectsinfo"} />
      <div className="w-full h-screen scrollDiv p-5 bg-gray-200 text-gray-800 ">
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          {users?.map((r, i) => {
            return <Card key={i} users={r} />;
          })}
        </div>
      </div>
    </section>
  );
}
