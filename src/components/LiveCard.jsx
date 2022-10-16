import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import Spinner from './Spinner'

export default function LiveCard() {
  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true)
      const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=5a8598ffbb6fc6bb4eabad16e62db094b32004469a826432fb183ea0a168e30c`
      const response = await fetch(url)
      const resJson = await response.json()
      setData(resJson.result)

      setLoading(false)
    }
    fetchApi()
    setInterval(fetchApi, 30000)
  }, [])



  return (<>
    {Loading && <Spinner />}
    <div className="container  my-4">
      <div className="row" >
        <div className="col-md-4 " style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap:"20px"
        }} >


          {!data ? <div className="container">
            <h1 className='text-center'>No live matches now</h1>
          </div> :
            data.map((ele) => {

              return (<><CardItem tournament={ele.league_name} country={ele.country_name} status={ele.event_status} hometeam={ele.event_home_team} score={ele.event_final_result} awayteam={ele.event_away_team} homeimgurl={ele.home_team_logo} awayimgurl={ele.away_team_logo} /></>)
            })
          }

        </div>
      </div>
    </div>
  </>
  )
}
