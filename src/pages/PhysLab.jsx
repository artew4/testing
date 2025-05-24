import { useState } from "react";
import "../styles/pages/PhysLab.scss";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import Header from "../components/Header.jsx";

function DraggableObject() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "object",
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="object"
    >
      m
    </div>
  );
}

function DroppableBeaker({ isDropped }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "beaker",
  });

  function GravityForce(massInGrams, gravity = 9.8) {
    const massInKg = massInGrams / 1000;
    const force = massInKg * gravity;
    return force; // в ньютонах
  }

  function ArchimedesForce(volumeInMl, fluidDensity = 1000, gravity = 9.8) {
    const volumeInCubicMeters = volumeInMl / 1_000_000;
    const force = fluidDensity * gravity * volumeInCubicMeters;
    return force; // в ньютонах
  }
  
  

  return (
    <div className="beaker-area">
      <div
        className="beaker"
        ref={setNodeRef}
        style={{ borderColor: isOver ? "#1E90FF" : "#333" }}
      >
        <motion.div
          className="water"
          animate={{ height: isDropped ? 150 : 100 }}
          transition={{ duration: 0.5 }}
        />
        {isDropped && (
          <motion.div
            className="object-inside"
            initial={{ y: -60 }}
            animate={{ y: 80 }}
            transition={{ duration: 0.5 }}
          >
            m
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function PhysLab() {
  const [isDropped, setIsDropped] = useState(false);
  const [volume, setVolume] = useState(0);
  const [mass, setMass] = useState(1);
  const [density, setDensity] = useState(2000);


  const handleDrop = (event) => {
    if (event.over && event.over.id === "beaker") {
      setIsDropped(true);
      setVolume(300);
    }
  };

  const reset = () => {
    setIsDropped(false);
    setVolume(0);
    setMass(1);
  };

  return (
    <div className="container-main">
      <Header />
      <h2>Лаборатория: Выталкивающая сила</h2>

      <DndContext onDragEnd={handleDrop}>
        <DroppableBeaker isDropped={isDropped} />

        <div className="volume-display">
          Объём вытесненной воды: {volume} мл
        </div>

        {!isDropped && <DraggableObject />}
      </DndContext>

      <div className="input-area">
        <label>
          Масса тела (г):
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            disabled={isDropped}
          />
        </label>
        <br/>
        <label>
          Плотность тела (г/см3):
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            disabled={isDropped}
          />
        </label>

      </div>

      {isDropped && (
        <div className="formula">
          <strong>F<sub>выт</sub></strong> = ρ × g × V = 1000 × 9.8 ×{" "}
          {volume / 1000} = {980 * (volume / 1000)} Н
          <br />
          Плотность тела ≈{" "}
          {mass && volume ? (mass / volume).toFixed(2) : "-"} г/см³
        </div>
      )}

      <button className="reset-btn" onClick={reset}>
        Сбросить
      </button>
    </div>
  );
}
