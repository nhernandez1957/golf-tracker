import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { moment } from 'moment';

const Main = (Props) => {
    const [tournament, setTournament] = useState([]);
    const [tournamentDate, setTournamentDate] = useState([]);

    useEffect(()=>{
        axios.get("https://api.sportsdata.io/golf/v2/json/Tournaments/2022?key=0b291d77e0024af88f47564fd2aa7c79")
            .then(res=>{
                console.log(res.data);
                setTournament(res.data);
            })
            .catch(err=>console.log(err))
    },[])


    return(
        <div>
            <h1 className="display-1 bg-light m-0 opacity-75">Yogi's Crystal Ball</h1>
            <h4 className="display-4 bg-light opacity-75">Brought to you by Nicholas Hernandez</h4>
            <table className="table table-hover w-75 mx-auto">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Tournament Name:</th>
                            <th scope="col">Start Date:</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            tournament.map((item,i)=>{ 
                            return <tr className="table-light opacity-75" key={i}>
                                <td className="fw-bold"><Link to={`/tournament/${item.TournamentID}`}>{item.Name}</Link></td>
                                <td>{(new Date(item.StartDate)).toDateString()}</td>
                            </tr>})
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default Main;