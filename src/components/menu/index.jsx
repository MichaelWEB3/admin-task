import Router from "next/router";
import React, { useEffect, useState } from "react";

export default function Menu({ propSelect }) {
  const [seleck, setseleck] = useState("home");
  useEffect(() => {
    if (propSelect) setseleck(propSelect);
  }, [propSelect]);
  return (
    <nav className="w-full bg-gray-700 h-20 text-gray-50     font-medium  p-5">
      <ul className="w-full  flex  justify-around  items-center h-full ">
        <li className="w-auto">
          <span
            onClick={() => {
              Router.push("/home");
              setseleck("home");
            }}
            className={`${
              seleck == "home" && "border-b border-gray-50"
            }  cursor-pointer hover:text-lg transition  duration-300`}
          >
            Todo List
          </span>
        </li>
        <li className="w-auto">
          <span
            onClick={() => {
              Router.push("/hold");
              setseleck("hold");
            }}
            className={`${
              seleck == "hold" && "border-b border-gray-50"
            }  cursor-pointer hover:text-lg transition  duration-300`}
          >
           Hold
          </span>
        </li>
        <li className="w-auto">
          <span
            onClick={() => {
              Router.push("/finish");
              setseleck("finish");
            }}
            className={`${
              seleck == "finish" && "border-b border-gray-50"
            }  cursor-pointer hover:text-lg transition  duration-300`}
          >
            Finish
          </span>
        </li>
        <li
          onClick={() => {
            setseleck("createAcess");
            Router.push("/createAcess");
          }}
          className="w-auto"
        >
          <span
            className={`${
              seleck == "createAcess" && "border-b border-gray-50"
            } cursor-pointer hover:text-lg transition  duration-300`}
          >
            Creates acess
          </span>
        </li>
        <li className="w-auto">
          <span
            onClick={() => {
              setseleck("projectsinfo");
              Router.push("/projectsinfo");
            }}
            cla
            className={`
            ${seleck == "projectsinfo" && "border-b border-gray-50"} 
            cursor-pointer hover:text-lg transition  duration-300`}
          >
            Directors Assignments
          </span>
        </li>
        <li className="w-auto">
          <span
            onClick={() => {
              setseleck("users");
              Router.push("/users");
            }}
            cla
            className={`
            ${seleck == "users" && "border-b border-gray-50"} 
            cursor-pointer hover:text-lg transition  duration-300`}
          >
            Users
          </span>
        </li>
        <li className="w-5/12 flex  justify-end">
          <span className=" cursor-pointer hover:text-lg transition  duration-300">
            {" "}
            Exit
          </span>
        </li>
      </ul>
    </nav>
  );
}
