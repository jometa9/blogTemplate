'use client'
import React, { useEffect } from "react";

export default function YT() {
  useEffect(() => {
   window.location.href = "https://www.youtube.com/@blogTemplateyer";
  }, []);
  return (
    <div className="centerLoading">
      <h3>Cargando...</h3>
    </div>
  );
}
