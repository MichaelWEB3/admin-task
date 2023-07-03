import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

export default function CardBody({ projectI }) {
  const [movie, setMovie] = useState(null);
  const [comment, setcomment] = useState(null);
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
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
  const commentedit = async (id) => {
    if (id) {
      await axios
        .put(`/api/movie/comment/${id}`, {
          comment,
        })
        .then(() => {
          closeHandler()
          getOneMovie(projectI.uidMovie);
        })
        .catch((e) => {
          console.loog(e)
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
    <li className="flex flex-row  text-xs">
      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >
          <Text color="#363449">Select status</Text>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full flex flex-col h-full p-5 bg-slate-200">
            <span>Select option</span>
            <input
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
              name=""
              id=""
              placeholder="Note"
              className="mb-5 p-2 border-gray-200"
            ></input>
            <Button
              onClick={() => {
                commentedit(movie.id);
              }}
            >
              savee
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="w-2/12 border text-start border-gray-400 p-2 flex justify-center  items-center text-xs">
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
      <div className="w-2/12  text-start border border-gray-400 p-2 flex justify-center  items-center text-xs">
        {check(movie?.datas)}
      </div>
      <div
        onClick={() => {
          setVisible(true);
          handler();
        }}
        className="w-4/12  hover:bg-slate-300  text-start border cursor-pointer border-gray-400 p-2 flex justify-center  items-center text-xs"
      >
        {movie?.notesAdmi && movie?.notesAdmi}
        {!movie?.notesAdmi && <span>Note</span>}
      </div>
    </li>
  );
}
