import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import { Table, Button } from "@nextui-org/react";
import axios from "axios";
import TabBody from "../../components/tabbody";

export default function Home() {
  const [meusProjects, setmeusProjects] = useState(null);
  const [opmes, setopmes] = useState("");
  const [opmes2, setopmes2] = useState("");
  const [aniamanha, setaniamanha] = useState([]);
  const [semani, setsemani] = useState([]);
  const [nenhumnemoutro, setnenhumnemoutro] = useState([]);


  const [artmanha, setartmanha] = useState([]);
  const [semart, setsemart] = useState([]);
  const [nenhumart,setnenhumart] = useState([]);

  const GetMyProjects = async () => {
    setaniamanha([]);
    setsemani([]);
    setnenhumnemoutro([]);
    await axios
      .get(`/api/getsubmitTask`, {
        params: {
          opmes1: opmes,
          opmes2: opmes2,
        },
      })
      .then((resp) => {
        if (resp.data.list) {
          for (let i = 0; i <= resp.data.list.length; i++) {
            veryfi(resp.data.list[i]);
          }
        }
        setmeusProjects(resp.data.list);
      })
      .catch((e) => {
        alert("error requisition");
      });
  };
  useEffect(() => {
    GetMyProjects();
  }, []);
  async function veryfi(dates) {
    if (!dates?.datas) {
    } else {
      let jsontras = await JSON.parse(dates?.datas);
      console.log(jsontras);
      const dataAmanha = new Date();
      dataAmanha.setDate(dataAmanha.getDate() + 1);

      let temEntrega = function hasDeliveryTomorrow(jsontras) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); // define a data de amanhã
        for (let i = 0; i < jsontras.length; i++) {
          console.log(jsontras[i]);
          if (jsontras[i].Tags == 5) {
            const date = new Date(jsontras[i].startDate);
            if (
              date.getDate() === tomorrow.getDate() &&
              date.getMonth() === tomorrow.getMonth() &&
              date.getFullYear() === tomorrow.getFullYear()
            ) {
              return true; // há entrega amanhã
            } else {
              return false;
            }
          } else {
            return "roi";
          }
        }
      };

      if (temEntrega(jsontras) === "roi") {
        let arr = [];
        arr.push(...nenhumart, dates);
        ,(arr);
      }

      if (temEntrega(jsontras) === true) {
        let arr2 = [];
        arr2.push(...artmanha, dates);

        setartmanha(arr2);
      }

      if (temEntrega(jsontras) === false) {
        let arr3 = [];
        arr3.push(...semart, dates);
        setsemart(arr3);
      }
    }
  }

  async function veryf2(dates) {
    if (!dates?.datas) {
    } else {
      let jsontras = await JSON.parse(dates?.datas);
      console.log(jsontras);
      const dataAmanha = new Date();
      dataAmanha.setDate(dataAmanha.getDate() + 1);

      let temEntrega = function hasDeliveryTomorrow(jsontras) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); // define a data de amanhã
        for (let i = 0; i < jsontras.length; i++) {
          console.log(jsontras[i]);
          if (jsontras[i].Tags == 7) {
            const date = new Date(jsontras[i].startDate);
            if (
              date.getDate() === tomorrow.getDate() &&
              date.getMonth() === tomorrow.getMonth() &&
              date.getFullYear() === tomorrow.getFullYear()
            ) {
              return true; // há entrega amanhã
            } else {
              return false;
            }
          } else {
            return "roi";
          }
        }
      };

      if (temEntrega(jsontras) === "roi") {
        let arr = [];
        arr.push(...nenhumnemoutro, dates);
        setnenhumnemoutro(arr);
      }

      if (temEntrega(jsontras) === true) {
        let arr2 = [];
        arr2.push(...aniamanha, dates);

        setaniamanha(arr2);
      }

      if (temEntrega(jsontras) === false) {
        let arr3 = [];
        arr3.push(...semani, dates);
        setsemani(arr3);
      }
    }
  }
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
        </table>
        <div className="w-full h-5 justify-end flex bg-purple-700 text-gray-50  text-xs">
          Ani 1
        </div>

        <table className="w-full textFormat  bg-gray-800 text-left text-gray-500 text-gray-400 ">
          <tbody>
            {aniamanha?.map((r, i) => {
              return <TabBody GetMyProjects={GetMyProjects} r={r} key={i} />;
            })}
          </tbody>
        </table>

        <div className="w-full h-5 justify-end flex bg-purple-300 text-gray-500  text-xs">
          Ani 1.5
        </div>
        <table className="w-full textFormat  bg-gray-800 text-left text-gray-500 text-gray-400 ">
          <tbody>
            {nenhumnemoutro?.map((r, i) => {
              return <TabBody GetMyProjects={GetMyProjects} r={r} key={i} />;
            })}
          </tbody>
        </table>
        <div className="w-full h-5 justify-end flex bg-pink-300 text-gray-500  text-xs">
          Ani 2
        </div>
        <table className="w-full textFormat  bg-gray-800 text-left text-gray-500 text-gray-400 ">
          <tbody>
            {semani?.map((r, i) => {
              return <TabBody GetMyProjects={GetMyProjects} r={r} key={i} />;
            })}
          </tbody>
        </table>
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
