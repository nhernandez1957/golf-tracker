import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const ShowPlayer = (props) => {
    const {_id} = useParams();
    const {player_id} = useParams();

    const [player, setPlayer] = useState({});
    const [instPlayer, setInstPlayer] = useState({});
    const [playerNews, setPlayerNews] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.sportsdata.io/golf/v2/json/PlayerTournamentStatsByPlayer/${_id}/${player_id}?key=0b291d77e0024af88f47564fd2aa7c79`)
            .then(res=>{
                console.log(res.data)
                setPlayer(res.data);
            })
            .catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        axios.get(`https://api.sportsdata.io/golf/v2/json/Player/${player_id}?key=0b291d77e0024af88f47564fd2aa7c79`)
            .then(res=>{
                setInstPlayer(res.data);
            })
            .catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        axios.get(`https://api.sportsdata.io/golf/v2/json/NewsByPlayerID/${player_id}?key=0b291d77e0024af88f47564fd2aa7c79`)
            .then(res=>{
                console.log(res.data)
                setPlayerNews(res.data);
            })
            .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <div className="w-75 mx-auto bg-white opacity-75">
                <Link className="btn btn-primary float-end m-5" to="/">Home</Link>
                <h1 className="d-flex display-1">{player.Name}</h1>
                <img src={instPlayer.PhotoUrl} alt={instPlayer.Name} />
                <h4 className="display-4">Country: {player.Country}</h4>
                <h4 className="display-4">Score: {player.TotalScore}</h4>
                <h4 className="display-4">Tournament Position: {player.Rank}</h4>
                <h5 className="display-4"> <span className="text-primary">Player News and Updates:</span></h5>
                {
                    playerNews.map((item,i)=>{
                        return <p key={i}>{item.Content}</p>
                    })
                }
                <Link className="btn btn-info float-start mt-5" to={`/tournament/${_id}`}>Back to Tournament</Link>
            </div>
        </div>
    )
}

export default ShowPlayer;