import React from 'react'
import Anima from './Anima'

export default function CardItem(props) {

    return (
        <>
            <div className="card my-2 mx-2" style={{ width: "22rem"}}>

                <div className="card-body text-center">
                    <b className="card-title text-center my-0">{props.tournament}</b>
                    <span className='text-muted fs-6' > ({props.country})</span>
                    <span className='d-flex text-center flex-column justify-content-flex-end text-success my-0'>Live</span>
                    <small className='d-flex text-center flex-column justify-content-center text-success my-0' >{(props.status).length <= 3 ? (<><span>{props.status}'<Anima/></span></>) : <>{props.status}</>}</small>

                    <div className="d-flex  justify-content-between">
                        <div className=" flex-column text-center justify-content-center " style={{ width: "80px" }}>
                            <b className='' style={{ fontSize: "11px" }}>{(props.hometeam).slice(0, 13)}</b>
                            <div className='container'><img src={props.homeimgurl} width="40px" alt="..." /></div>

                        </div>
                        <div className='d-flex flex-column justify-content-center'>

                            <b className='text-center'>{props.score}</b>
                        </div>


                        <div className=" flex-column text-center overflow-hidden justify-content-center" style={{ width: "80px" }}>
                            <b style={{ fontSize: "11px" }}>{props.awayteam.slice(0, 13)}</b>
                            <div className='container'><img src={props.awayimgurl} width="40px" alt="..." /></div>

                        </div>
                        
                    </div>
                    {/* <hr />
                        <div className="goalscorer"><span className="material-symbols-outlined ">
                        sports_soccer
        </span></div> */}


                </div>
            </div>


        </>
    )
}
