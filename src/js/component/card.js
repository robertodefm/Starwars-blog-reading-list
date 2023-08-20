import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/Star_Wars_Logo.png";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="card p-2" style={{ minWidth: "300px" }}>
        <img src={starWarsImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between">
            <Link
              to={`/${props.endpoint}/${props.item.uid}`}
              className="btn btn-outline-primary"
            >
              Learn More!
            </Link>
            <button
              type="button"
              onClick={(e) => {
                if (
                  store &&
                  store.favorites.find((favorite, index) => {
                    return (
                      favorite.url === `/${props.endpoint}/${props.item.uid}`
                    );
                  })
                ) {
                  {
                    
                  }
                } else {
                  actions.addToFavorite(
                    props.item.name,
                    `/${props.endpoint}/${props.item.uid}`
                  );
                }
              }}
              className="btn btn-outline-warning"
            >
              {store &&
              store.favorites.find((favorite, index) => {
                return favorite.url === `/${props.endpoint}/${props.item.uid}`;
              }) ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.proptype = {
  item: PropTypes.object,
};

export default Card;
