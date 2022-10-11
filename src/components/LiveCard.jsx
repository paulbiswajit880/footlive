import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import Spinner from './Spinner'

export default function LiveCard() {
  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true)
      const url = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=eee3c0420771e93151ed86b446a2b43454f22f8c0b90cfa91b13349fb32ad81b`
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
          justifycontent: "center"
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
