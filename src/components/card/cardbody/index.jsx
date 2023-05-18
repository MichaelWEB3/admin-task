import React, { useState } from "react";

export default function CardBody({ projectI }) {
  return (
    <li className=" ">
      - {projectI.nome} - {projectI.Timezone}
    </li>
  );
}
