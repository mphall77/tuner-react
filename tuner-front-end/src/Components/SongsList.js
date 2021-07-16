import SongListItem from "./SongListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const SongsList = () => {
	const [songs, setSongs] = useState([]);

	const fetchSongs = async () => {
		try {
			const res = await axios.get(`${API}/songs`);
			setSongs(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	return (
		<div className="Songs">
			<section className="table-container">
				<div className="glass">
					<div className="blurb">
						<h1>That's My Jam!</h1>
					</div>
					<table>
						<thead>
							<tr>
								<th>Song</th>
								<th>Artist</th>
								<th>Album</th>
								<th>Time</th>
								<th>Favorite</th>
							</tr>
						</thead>
						<tbody>
							{songs.map((song) => {
								return <SongListItem key={song.id} song={song} />;
							})}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default SongsList;
