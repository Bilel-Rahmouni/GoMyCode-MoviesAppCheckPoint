import React from "react";
import myLogo from "../logo.png";

export default function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={myLogo} width={70} height={40} alt="" />
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for your movie..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
