import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import Create from "../../components/create";

export default function Createsacess() {
  return (
    <section className="w-full bg-gray-200 flex flex-col">
      <Menu propSelect={"createAcess"} />
      <div className="w-full h-screen p-5 bg-gray-200">
        <Create />
      </div>
    </section>
  );
}
