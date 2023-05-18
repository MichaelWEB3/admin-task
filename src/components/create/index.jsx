import React, { useState } from "react";
//import useDados from "../../../datehook/userHook";
//import router from 'next/router'
import axios from "axios";
//import { FiAlertCircle } from "react-icons/fi";
import Router from "next/router";

export default function Create() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [Office, setOffice] = useState("Designer");
  const [error, setError] = useState("");
  //const dates = useDados();

  const createCont = async () => {
    if (!email || !name || !password) {
      return;
    }
    axios
      .post("/api/create", {
        email,
        password,
        name,
        office: Office,
      })
      .then(() => {
        alert("create sucessfull");
      })
      .catch((e) => {
        alert("error request");
      });
  };
  return (
    <div className="w-full h-auto justify-center items-center flex border border-gray-800/20  shadow shadow-black/20 text-slate-800 ">
      <div className=" rounded-lg flex-col  md:w-6/12 h-full md:h-3/6 flex justify-start items-center p-5">
        <h1 className="text-2xl font-bold">Create access </h1>
        <label className="m-2 flex flex-col  items-start justify-start  w-full">
          <span className=" text-sm font-bold  mb-2">Name </span>
          <input
            name="name"
            value={name}
            onChange={(text) => setname(text.target.value)}
            className=" h-8 w-full bg-transparent border-gray-800/20 border-b-2 "
            placeholder="type your name"
            type="text"
          />
        </label>
        <label className="m-2 flex flex-col  items-start justify-start  w-full">
          <span className=" text-sm font-bold  mb-2">User email</span>
          <input
            name="user"
            type="text"
            value={email}
            onChange={(text) => setemail(text.target.value)}
            className=" h-8 w-full bg-transparent border-gray-800/20 border-b-2 "
            placeholder="type your email"
          />
        </label>
        <label className="m-2 flex flex-col  items-start justify-start  w-full">
          <span className=" text-sm font-bold  mb-2">Password</span>
          <input
            name="password"
            value={password}
            onChange={(text) => setpassword(text.target.value)}
            className=" h-8 w-full bg-transparent border-gray-800/20 border-b-2 "
            placeholder="type your passworld"
            type="password"
          />
        </label>

        <label className="m-2 flex flex-col  items-start justify-start  w-full  ">
          <span className=" text-sm font-bold  mb-2">Select Office </span>
          <select
            className=" w-full  text-gray-700  p-1 border-none border-b-4 border-gray-800/20"
            onChange={(item) => setOffice(item.target.value)}
          >
            <option value={"Designer"}> Designer </option>
            <option value={"Director"}> Director</option>
            <option value={"Producer"}> Producer</option>
          </select>
        </label>
        {error && (
          <div className="ml-5 w-full flex flex-row justify-start items-center">
            <span className="text-red-500 ml-5">Fill in all fields</span>
          </div>
        )}

        <button
          className="w-full  text-slate-50 p-2 mt-10 bg-gray-400 hover:bg-gray-500 "
          onClick={() => createCont()}
        >
          <span> Create</span>
        </button>
        <div className="w-full mt-5 flex justify-start items-center">
          {/** 
         * 
         *  <div className='w-full mt-5 flex justify-start items-center'>
              <span className='mr-2'>Já tem conta? </span>
              <span className='font-bold text-sm cursor-pointer' onClick={() => router.push('/login')}>faça login</span>
            </div>
         * 
        */}
        </div>
      </div>
    </div>
  );
}
