import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SongDetails = () => {
	const [songInfo, setSongInfo] = useState({});
	let { id } = useParams();

	const fetchSong = async () => {
		console.log("ID:", id);
		try {
			const res = await axios.get(`${API}/songs/${id}`);
			console.log("RES:", res);
			setSongInfo(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchSong();
	}, []);
	return (
		<div>
			<p>
				<strong>Song:</strong> {songInfo.name}
			</p>
			<p>
				<strong>Artist:</strong> {songInfo.artist}
			</p>
			<p>
				<strong>Album:</strong> {songInfo.album}
			</p>
			<p>
				<strong>Time:</strong> {songInfo.time}
			</p>
			<p>
				<strong>Fav:</strong> {`${songInfo.is_favorite}`}
			</p>
			<section className="details-btns">
				<div>
					<Link to={`/songs`}>
						<button>Back</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default SongDetails;
