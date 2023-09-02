import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="https://mak2506.github.io/react-todo-app/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white"  to="https://mak2506.github.io/react-todo-app/about">About</Link>
        </li>
      </ul>     
    </div>
  </div>
</nav>
</>
  )
}

Header.defaultProps = {
  title: "Your Title Here"
}

Header.propTypes = {
  title: PropTypes.string
}
