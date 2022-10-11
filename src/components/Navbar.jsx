import React from 'react'
import Sidebar from './Sidebar'

export default function Home() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 sticky-top " >
      <div className="container-fluid " style={{ padding: "2.2px" }}>
        <p className="navbar-brand my-0" >
          <img src="footlive.png" alt="..." width="100" className="d-inline-block align-text-top my-0" style={{ marginLeft: "40px" }} />
        </p>
        <a className="btn" style={{ top: "11px", position: "absolute", border: "none", left: "-2px" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <span className="material-symbols-outlined" style={{ color: "white" }}>
            menu
          </span>
        </a>
      </div>
      {/* <div className="form-check form-switch form-check-reverse position-absolute" style={{ right: "15px", top: "10px", fontSize: "24px" }}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
        <label className="form-check-label" for="flexSwitchCheckReverse"></label>
      </div> */}
    </nav>
  <Sidebar/>
  </>
  )
}
