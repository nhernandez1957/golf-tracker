import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const ShowOne = (props) => {
    const {_id} = useParams();

    const [tournament, setTournament] = useState({});
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${_id}?key=0b291d77e0024af88f47564fd2aa7c79`)
            .then(res=>{
                console.log(res.data.Players);
                setTournament(res.data.Tournament);
                setPlayers(res.data.Players)
            })
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <Link className="btn btn-primary float-end m-5" to="/">Home</Link>
            <div className="w-75 mx-auto">
            <h1 className="display-1 m-0 bg-light opacity-75">{tournament.Name}</h1>
            <h4 className="display-4 m-0 bg-light opacity-75">{tournament.Location}</h4>
            <h4 className="display-4 bg-light opacity-75">{tournament.Venue}</h4>

            <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Position:</th>
                            <th scope="col">Player Name:</th>
                            <th scope="col">Score (related to par):</th>
                            <th scope="col">Odds to win:</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            players.map((item,i)=>{ 
                            return <tr className="table-light opacity-75" key={i}>
                                <td>{item.Rank}</td>
                                <td><Link to={`/tournamentPlayer/${_id}/${item.PlayerID}`}>{item.Name}</Link></td>
                                <td>{item.TotalScore}</td>
                                <td>+ {item.OddsToWin}</td>
                            </tr>})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowOne;