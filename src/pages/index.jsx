import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Router from "next/router";
export default function Login({}) {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div
      className={`
            flex  justify-center items-center
            h-screen w-screen
            bg-gray-200
        `}
    >
      <div className="w-6/12 h-3/6 bg items-center justify-center">
        <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-500 via-pink-500 to-blue-900 p-1">
          <div className="flex h-full   p-5 flex-col w-full items-center justify-center bg-gray-200 back">
            <h1 className=" font-semibold text-2xl  text-gray-500 mb-10">
              Login
            </h1>
            <div className="mb-10 w-full">
              <Input
                width="100%"
                underlined
                clearable
                placeholder="NickName"
                color="primary"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="w-full mb-10">
              <Input.Password
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                width="100%"
                underlined
                clearable
                placeholder="Senha"
                color="primary"
              />
            </div>

            <Button
              onClick={() => {
                Router.push("/home");
              }}
              shadow
              color="primary"
              auto
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
