import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsImg from "../../img/Star_Wars_Logo.png";

export const Info = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getInfoDetails(params.uid, params.endpoint);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={starWarsImg}
            className="img-top"
            alt="..."
            style={{ width: "800", height: "600" }}
          />
        </div>
        <div className="col">
          <h2>{store.details && store.details.properties.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            hic vitae iusto consectetur nobis quam excepturi blanditiis natus
            culpa perspiciatis nulla neque saepe aperiam, a esse modi quidem
            reiciendis cum eius voluptates non laboriosam eos impedit omnis?
            Repellendus labore eum quod, omnis veniam eaque tempore cupiditate
            nisi eos nam officiis odio assumenda harum laborum quia, repudiandae
            accusamus, nemo quisquam nihil hic beatae? Optio voluptatum nam
            earum in praesentium id totam voluptates illum deleniti officiis,
            quaerat sapiente odit enim, tenetur odio eos vel aut quis. Ratione,
            maiores. Velit expedita soluta consectetur nostrum voluptatum
            laborum aspernatur eligendi dicta molestias vero officiis enim
            reprehenderit dolores quod cupiditate quia exercitationem explicabo
            dolorem laudantium, adipisci saepe id a blanditiis aliquam. Quos, ad
            delectus? Beatae eum deleniti, quasi repellendus, eveniet est
            doloribus rerum, ea nesciunt veritatis quo ab eligendi saepe aut
            ipsam doloremque dolor quos maxime excepturi! Nemo iste nulla
            molestias incidunt quod quis animi consequatur?
          </p>
        </div>
      </div>
      <hr
        className="line"
        style={{ color: "red", widht: "100%", height: "5px" }}
      ></hr>
      <div className="row" style={{ color: "red" }}>
        <div className="col">
          <h3>Name</h3>
          {store.details && store.details.properties.name}
        </div>

        <div className="col">
          <h3>
            {params.endpoint == "people"
              ? "Birth"
              : params.endpoint == "planets"
              ? "Diameter"
              : "Model"}
          </h3>
          {params.endpoint == "people"
            ? store.details && store.details.properties.birth_year
            : params.endpoint == "planets"
            ? store.details && store.details.properties.diameter
            : store.details && store.details.properties.model}
        </div>

        <div className="col">
          <h3>
            {params.endpoint == "people"
              ? "Gender"
              : params.endpoint == "planets"
              ? "Gravity"
              : "vehicle_class"}
          </h3>
          {params.endpoint == "people"
            ? store.details && store.details.properties.gender
            : params.endpoint == "planets"
            ? store.details && store.details.properties.gravity
            : store.details && store.details.properties.vehicle_class}
        </div>

        <div className="col">
          <h3>
            {params.endpoint == "people"
              ? "Height"
              : params.endpoint == "planets"
              ? "Climate"
              : "cargo_capacity"}
          </h3>
          {params.endpoint == "people"
            ? store.details && store.details.properties.height
            : params.endpoint == "planets"
            ? store.details && store.details.properties.climate
            : store.details && store.details.properties.cargo_capacity}
        </div>

        <div className="col">
          <h3>
            {params.endpoint == "people"
              ? "Skin color"
              : params.endpoint == "planets"
              ? "Terrain"
              : "manufacturer"}
          </h3>
          {params.endpoint == "people"
            ? store.details && store.details.properties.skin_color
            : params.endpoint == "planets"
            ? store.details && store.details.properties.terrain
            : store.details && store.details.properties.manufacturer}
        </div>

        <div className="col">
          <h3>
            {params.endpoint == "people"
              ? "Eye color"
              : params.endpoint == "planets"
              ? "orbital_period"
              : "length"}
          </h3>
          {params.endpoint == "people"
            ? store.details && store.details.properties.eye_color
            : params.endpoint == "planets"
            ? store.details && store.details.properties.orbital_period
            : store.details && store.details.properties.length}
        </div>
      </div>
    </div>
  );
};
