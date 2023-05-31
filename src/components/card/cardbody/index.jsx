import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CardBody({ projectI }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getOneMovie(projectI.uidMovie);
  }, []);
  const getOneMovie = async (id) => {
    if (id) {
      await axios
        .get(`/api/movie/oneMovie/${id}`)
        .then((resp) => {
          setMovie(resp.data.dates);
          return resp.data.dates;
        })
        .catch((e) => {
          return;
        });
    }
  };
  const check = (data) => {
    if (data) {
      let newdata = JSON?.parse(data);
      let achou;
      let newarrayda = newdata?.map((r) => {
        if (Number(r.id) == 0) {
          achou = r.startDate;
        }
      });
      let Dataa = new Date(achou);
      return Dataa.toLocaleDateString();
    }
  };
  return (
    <li className="flex flex-row ">
      <div className="w-4/12 border text-start border-gray-400 p-2 flex justify-center  items-center text-xs">
        {movie?.Product}
      </div>
      <div
        className={`${
          movie?.AnimationLevel == "Full Animation"
            ? " bg-blue-950 text-gray-50"
            : "bg-green-950 text-gray-50"
        } w-4/12 text-start border border-gray-400 p-2 flex justify-center  items-center text-xs`}
      >
        {movie?.AnimationLevel}
      </div>
      <div className="w-4/12  text-start border border-gray-400 p-2 flex justify-center  items-center text-xs">
        {check(movie?.datas)}
      </div>
    </li>
  );
}
