import React from 'react'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
  return (
    <>
        <div className="offcanvas offcanvas-start  " style={{ maxWidth: "75%" }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header text-bg-dark p-2">
        <div style={{ marginLeft: "-40px", position: 'relative' }}>
          <img src="footlive.png" alt="..." width="90" className="d-inline-block align-text-top " style={{ marginLeft: "40px", position: 'relative' }} />
        </div>
        <button type="button" className="btn " style={{ border: "none" }} data-bs-dismiss="offcanvas" aria-label="Close"><span className="material-symbols-outlined" style={{ color: "white" }}>
          close
        </span></button>
      </div>

     <SidebarItem/>
    </div>
    </>
  )
}
