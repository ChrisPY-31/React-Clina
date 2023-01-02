import React from "react";
import "./Clima.css";
const Clima = ({ clima, handleClick }) => {
  const url = "http://openweathermap.org/img/w/";
  return (
    <div className="row mt-5">
      {clima.map((pais) => {
        return (
          <div className="col-3" key={pais.id}>
            <div className="card mb-5 d-flex justify-content-center">
              <div className="card-contenedor d-flex justify-content-center">
                <div className="cerrar d-flex justify-content-center text-light fs-5"
                  onClick={()=>handleClick(pais.id)}
                >X</div>
                <img
                  className="card-image-top imagen"
                  src={`${url}${pais.weather[0].icon}.png`}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title mb-3">{pais.name}</h5>
                <h6 className="card-subtitle text-muted mb-2">
                  {pais.weather[0].description}
                </h6>
                <div className="row">
                  <div className="col-6">
                    <p className="text-center fw-bold">Temperature Max</p>
                    <p className="card-text m-0 text-center ">
                      {(pais.main.temp_max - 273.15).toFixed(1)}°C
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-center fw-bold">Temperature Min</p>
                    <p className="card-text text-center">
                      {(pais.main.temp_min - 273.15).toFixed(1)}°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Clima };
