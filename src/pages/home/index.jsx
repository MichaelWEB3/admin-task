import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import { Table, Button } from "@nextui-org/react";
import axios from "axios";
import TabBody from "../../components/tabbody";

export default function Home() {
  const [meusProjects, setmeusProjects] = useState(null);
  const [opmes, setopmes] = useState("");
  const [opmes2, setopmes2] = useState("");
  const GetMyProjects = async () => {
    await axios
      .get(`/api/getsubmitTask`, {
        params: {
          opmes1: opmes,
          opmes2: opmes2,
        },
      })
      .then((resp) => {
        console.log(resp.data.list)
        setmeusProjects(resp.data.list);
      })
      .catch((e) => {
        alert("error requisition");
      });
  };
  useEffect(() => {
    GetMyProjects();
  }, []);
  return (
    <section className="w-full bg-gray-200">
      <Menu propSelect={"home"} />
      <div className="w-full h-screen  bg-gray-200">
        <span className="m-2">Select filter date</span>
        <div className="flex justify-start m-2 items-center">
          <input
            type="date"
            value={opmes}
            onChange={(e) => setopmes(e.target.value)}
          />
          -
          <input
            type="date"
            value={opmes2}
            onChange={(e) => setopmes2(e.target.value)}
          />
          <Button
            className="w-20 h-20 mr-5 ml-5"
            onClick={() => {
              GetMyProjects();
            }}
          >
            Filter
          </Button>
        </div>
        <div className="w-full h-5 justify-end flex bg-purple-700 text-gray-50  text-xs">
          Ani 1
        </div>

        <table className="w-full textFormat  bg-gray-800 text-left text-gray-500 text-gray-400 ">
          <thead className=" thead-fixed uppercase  font-bold text-gray-400">
            <tr>
              <th scope="col" className="py- px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Product</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Project</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1 ">
                <div className="w-full flex justify-start items-center ">
                  <span className="">Director</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span className="">Designer</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span className="">3D </span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Models </span>
                </div>
              </th>

              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Anim </span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>AE </span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Roto </span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Demo </span>
                </div>
              </th>

              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Comp </span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>ST </span>
                </div>
              </th>

              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Deadline</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Team</span>
                </div>
              </th>
              <th scope="col" className="py-1 px-1">
                <div className="w-full flex justify-start items-center">
                  <span>Notes</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {meusProjects?.map((r, i) => {
              return <TabBody GetMyProjects={GetMyProjects} r={r} key={i} />;
            })}
          </tbody>
        </table>

        <div className="w-full h-5 justify-end flex bg-purple-300 text-gray-500  text-xs">
          Ani 1.5
        </div>
        <div className="w-full h-5 justify-end flex bg-pink-300 text-gray-500  text-xs">
          Ani 2
        </div>

        <div className="w-full h-5 justify-end flex bg-green-700 text-gray-50  text-xs">
          Art 1
        </div>
        <div className="w-full h-5 justify-end flex bg-green-500 text-gray-500  text-xs">
          Art 1.5
        </div>
        <div className="w-full h-5 justify-end flex bg-green-300 text-gray-500  text-xs">
          Art 2
        </div>
      </div>
    </section>
  );
}
