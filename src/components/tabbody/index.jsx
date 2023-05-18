import { useEffect, useState } from "react";
import axios from "axios";

export default function TabBody({
  r,
  calendar,
  setCalendarChecl,
  calendarCehck,
  setCalendar,
}) {
  const [movie, setMovie] = useState(null);
  function stringFormat(string) {
    if (string) {
      return string.split("-").slice(0, 1).join("-");
    }
  }
  useEffect(() => {
    getOneMovie(r.uidMovie);
  }, []);
  const getOneMovie = async (id) => {
    if (id) {
      return await axios
        .get(`/api/movie/oneMovie/${id}`)
        .then((resp) => {
          setMovie(resp.data.dates);
          return resp.data.dates;
        })
        .catch((e) => {
          alert("error requisition");
        });
    }
  };
  function sumRDireto(
    DPendingDirecot,
    ModelsPendingDirecot,
    AnimPendingDirecot,
    AEPendingDirecot,
    RotoPendingDirecot,
    CompPendingDirecot
  ) {
    let sum =
      Number(DPendingDirecot == "Pending" ? 0 : DPendingDirecot) +
      Number(ModelsPendingDirecot == "Pending" ? 0 : ModelsPendingDirecot) +
      Number(AnimPendingDirecot == "Pending" ? 0 : AnimPendingDirecot) +
      Number(AEPendingDirecot == "Pending" ? 0 : AEPendingDirecot) +
      Number(RotoPendingDirecot == "Pending" ? 0 : RotoPendingDirecot) +
      Number(CompPendingDirecot == "Pending" ? 0 : CompPendingDirecot);

    return sum;
  }
  function sumRNew(
    DNewDirecot,
    ModelsNewDirecot,
    AnimNewDirecotl,
    AENewDirecot,
    RotoNewDirecot,
    DemoPendingDirecot,
    CompNewDirecot
  ) {}
  function sumRDesin(
    DPendingDesigner,
    ModelsPendingDesigner,
    AnimPendingDesigner,
    AEPendingDesigner,
    RotoPendingDesigner,
    DemoPendingDesigner,
    CompPendingDesigner
  ) {}
  function sumRDesin(
    DNewDesigner,
    ModelsNewDesigner,
    AnimNewDesigner,
    AENewDesigner,
    RotoNewDesigner,
    DemoNewDesigner,
    CompNewDesigner
  ) {}
  return (
    <tr
      onClick={() => {
        handler();
      }}
      className=" transparent textmeno border-b-2  border-white cursor-pointer   m-2 bg-gray-800 hover:bg-gray-900  "
    >
      <th scope="row" className="py-1 px-1 ">
        <div className="w-full flex justify-start items-center">
          <span className="text-green-400"> {movie?.Product}</span>
        </div>
      </th>

      <td className="py-1 px-1">{r.nome}</td>
      <td className="py-1 px-1">
        <div className="mr-5   text-green-400">
          {r.Director &&
            r.Director.map((resp, i) => {
              return (
                <span key={i} className="mr-5">
                  {stringFormat(resp)}
                </span>
              );
            })}
        </div>
      </td>

      <td className="py-1 px-1">
        <div className="   text-green-400">
          {r.Designer &&
            r.Designer.map((resp, i) => {
              return (
                <span key={i} className="">
                  {stringFormat(resp)}
                </span>
              );
            })}
        </div>
      </td>
      <td className="py-1 px-1 ">
        <div className="flex-col   ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.DPendingDesigner && (
            <div className="flex items-center   ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.DPendingDesigner}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-500 p-1 m-1"> {r?.DNewDesigner}</span>
            </div>
          )}
          {r?.DPendingDirecot && (
            <div className="flex  items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.DPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-500 p-1  m-1"> {r?.DNewDirecot}</span>
            </div>
          )}
        </div>
      </td>

      <td className="py- px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row  ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.ModelsPendingDesigner && (
            <div className="flex items-center     ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400 p-1 m-1">
                {r?.ModelsPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-400 p-1 m-1">
                {" "}
                {r?.ModelsNewDesigner}
              </span>
            </div>
          )}
          {r?.ModelsPendingDirecot && (
            <div className="flex  items-center     ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.ModelsPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.ModelsNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>

      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.AnimPendingDesigner && (
            <div className="flex items-center    ">
              <span className=" mr-1">DE</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.AnimPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.AnimNewDesigner}
              </span>
            </div>
          )}
          {r?.AnimPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.AnimPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.AnimNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.AEPendingDesigner && (
            <div className="flex  items-center    ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.AEPendingDesigner}{" "}
              </span>

              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1"> {r?.AENewDesigner}</span>
            </div>
          )}
          {r?.AEPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.AEPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1"> {r?.AENewDirecot}</span>
            </div>
          )}
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.RotoPendingDesigner && (
            <div className="flex  items-center    ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.RotoPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.RotoNewDesigner}
              </span>
            </div>
          )}
          {r?.RotoPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.RotoPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.RotoNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.DemoPendingDesigner && (
            <div className="flex  items-center    ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.DemoPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500  p-1 m-1">
                {" "}
                {r?.DemoNewDesigner}
              </span>
            </div>
          )}
          {r?.DemoPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.DemoPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.DemoNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R{" "}
            <span className="mr-2 ml-2">-</span> N
          </div>
          {r?.CompPendingDesigner && (
            <div className="flex  items-center    ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.CompPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>
              <span className="text-red-500 p-1 m-1">
                {" "}
                {r?.CompNewDesigner}
              </span>
            </div>
          )}

          {r?.CompPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {r?.CompPendingDirecot}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.CompNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>
      <td className="py-1 px-1 ">
        <div className="flex   items-center mb-1    ">
          <span className=" mr-1">DES</span>
          <span className="text-blue-400 p-1">
            {r?.STDesigner ? r?.STDesigner : "-"}{" "}
          </span>
        </div>
        <div className="flex   items-center    ">
          <span className="mr-1">DIR </span>
          <span className=" text-gray-100 p-1">
            {" "}
            {r?.STDirecot ? r?.STDirecot : "-"}
          </span>
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex  justify-center  items-center  ">
          <button
            onClick={() => {
              setCalendarChecl(true);
              setCalendar(movie?.datas);
            }}
            className="p-2 bg-blue-500 hover:bg-blue-800 text-gray-50"
          >
            {" "}
            Calendar
          </button>
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex  justify-center items-center    ">
          <span className="m-1">-</span>
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex justify-center items-center    ">
          <span className=" text-blue-400  p-1">{r?.noteDesigner} </span>
        </div>
        <div className="flex  justify-center items-center    ">
          <span className=" text-gray-100 p-1">
            {r?.noteDirecot} {!r?.noteDirecot && "-"}{" "}
          </span>
        </div>
      </td>
      <td className="py-1 px-1">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <span className=" w-8">.</span> / R / N
          </div>
          {r?.DemoPendingDesigner && (
            <div className="flex  items-center    ">
              <span className=" mr-1">DES</span>
              <span className=" text-blue-400  p-1 m-1">
                {r?.DemoPendingDesigner}{" "}
              </span>
              <span className="m-1">-</span>

              <span className=" text-red-500  p-1 m-1">
                {" "}
                {r?.DemoNewDesigner}
              </span>
            </div>
          )}
          {r?.DemoPendingDirecot && (
            <div className="flex   items-center    ">
              <span className="mr-1">DIR </span>
              <span className=" text-gray-100 p-1 m-1">
                {sumRDireto(
                  r?.DPendingDirecot,
                  r?.ModelsPendingDirecot,
                  r?.AnimPendingDirecot,
                  r?.AEPendingDirecot,
                  r?.RotoPendingDirecot,
                  r?.CompPendingDirecot
                )}
              </span>
              <span className="m-1">-</span>
              <span className=" text-red-500 p-1 m-1">
                {" "}
                {r?.DemoNewDirecot}
              </span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}