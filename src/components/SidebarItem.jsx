import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItem() {
  return (
    <div className="offcanvas-body">
    <div className="home" data-bs-dismiss="offcanvas">
        <b className=""><Link to="/">Home</Link></b>
    </div>
    <div className='my-4'>
      <b className="" data-bs-toggle="collapse" href="#collapseleague" role="button" aria-expanded="false" aria-controls="collapseleague">
         Point Table of Top Leagues <span>&#9660;</span>
      </b>
      <div className="collapse my-2" id="collapseleague">
        <ul className="list-group ">
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/premierleauge">Premier Leauge <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/152_premier-league.png" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/laliga">La Liga <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/302_la-liga.png" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"><Link to="/serie_a">Serie-A <img className='logo' src="https://football-italia.net/wp-content/uploads/2022/08/Lega-Serie-A.jpg" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/bundesliga">BundesLiga <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/171_2.-bundesliga.png" alt="" /></Link>  <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/ligue_1">Ligue-1 <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/168_ligue-1.png" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/primeiraliga">Primeira Liga <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2Qz0VpUpz7xR9GNjpZjh25KVsPtQ0c7GlQ&usqp=CAU" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/eredivise">Eredivisie <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/244_eredivisie.png" alt="" /></Link> <span></span></li>
          <li className="list-group-item" data-bs-dismiss="offcanvas"> <Link to="/isl">Indian Super League <img className='logo' src="https://apiv2.allsportsapi.com/logo/logo_leagues/566_indian-super-league.png" alt="" /></Link> <span></span></li>
        </ul>
      </div>
    </div>
    <div className='my-2' data-bs-dismiss="offcanvas">
      <b className="">FIFA World Cup <span><img className='logo' src="https://static.vecteezy.com/system/resources/previews/008/785/666/original/mondial-fifa-world-cup-qatar-2022-official-logo-champion-symbol-design-abstract-illustration-free-vector.jpg" alt="" /></span></b>
    </div>
  </div>
  )
}
