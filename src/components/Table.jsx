import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
export default function Table(props) {
  const [table, setTable] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true)
      const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${props.leaugeid}&APIkey=5a8598ffbb6fc6bb4eabad16e62db094b32004469a826432fb183ea0a168e30c`
      const response = await fetch(url)
      const resJson = await response.json()
      setTable(resJson.result.total)
      // console.log(resJson.result.total);
      setLoading(false)

    }
    fetchApi()
    // setInterval(fetchApi, 30000)
  }, [props])
  return (<>{loading && <Spinner/>}
  <div className="container text-center my-2" ><img className='tlogo' src={props.img} alt="" /></div>
    <div className="container" >
    <table className="table" >
      <thead className='border-info' >
        <tr >
          <th scope="col">#</th>
          <th scope="col">Team</th>
          <th scope="col">P</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GD</th>
          <th scope="col">Pts.</th>
        </tr>
      </thead>
      <tbody >

        {!loading && table.map((el, id) => {
          return (
            <tr  key={id}>
              <th scope="row">{el.standing_place}</th>
              <td>{el.standing_team}</td>
              <td>{el.standing_P}</td>
              <td>{el.standing_W}</td>
              <td>{el.standing_D}</td>
              <td>{el.standing_L}</td>
              <td>{el.standing_GD}</td>
              <td>{el.standing_PTS}</td>
            </tr>
          )
        })}



      </tbody>
    </table>
    </div>
  </>
  )
}
