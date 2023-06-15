import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import { Table } from "@nextui-org/react";
import axios from "axios";
import TabBody from "../../components/tabbody";

export default function Hold() {
  const [meusProjects, setmeusProjects] = useState(null);
  const GetMyProjects = async () => {
    await axios
      .get(`/api/getsubmitTask`)
      .then((resp) => {
        console.log(resp);
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
              return <TabBody r={r} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
