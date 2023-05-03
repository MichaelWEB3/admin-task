import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tfd from "@tensorflow/tfjs-data";
import * as tfo from "@tensorflow/tfjs-core";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import glassesImg from "../../img/glass.jpg";

const App = () => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [glasses, setGlasses] = useState(null);
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocossd.load();
      setModel(model);
    };

    loadModel();
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.src = glassesImg
      setGlasses(img);
    };

    loadImage();
  }, []);

  const detectObjects = async () => {
    const image = tfd?.browser?.fromPixels(webcamRef.current.video);
    const predictions = await model?.detect(image);
    setDetections(predictions);
    tfo.dispose(image);
  };

  useEffect(() => {
    if (webcamRef.current && model) {
      setInterval(() => {
        detectObjects();
      }, 100);
    }
  }, [webcamRef, model]);

  const drawDetections = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    detections.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;
      const glassesWidth = width * 1.5;
      const glassesHeight = glassesWidth * 0.3;
      const glassesX = x + width / 2 - glassesWidth / 2;
      const glassesY = y + height * 0.6 - glassesHeight / 2;
      ctx.drawImage(glasses, glassesX, glassesY, glassesWidth, glassesHeight);
    });
  };

  useEffect(() => {
    drawDetections();
  }, [detections]);

  return (
    <>
      <Webcam ref={webcamRef} />
      <canvas id="canvas" width={640} height={480} />
    </>
  );
};

export default App;