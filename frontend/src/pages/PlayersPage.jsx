import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:8080/players/get_all_players"
        );
        setPlayers(resp.data);
        console.log(resp.data);
        console.log(resp.status);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl">Players Page!</h1>
      <ul>
        {players.map((player) => (
          <li key={player.code}>
            {player.first_name} {player.last_name} - Club: {player.club},
            Position: {player.position}, Country: {player.country}
          </li>
        ))}
      </ul>
    </>
  );
}
