import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SongDetails = () => {
	const [songInfo, setSongInfo] = useState({});
	let { id } = useParams();
	let history = useHistory();

	const fetchSong = async () => {
		try {
			const res = await axios.get(`${API}/songs/${id}`);
			setSongInfo(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteSong = async () => {
		try {
			await axios.delete(`${API}/songs/${id}`);
			const deleted = [...songInfo];
			deleted.splice(id, 1);
			setSongInfo(deleted);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async () => {
		await deleteSong(id);
		history.push("/songs");
	};

	useEffect(() => {
		fetchSong();
	}, [id]);

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
				<div>
					<Link to={`/songs/${id}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</section>
		</div>
	);
};

export default SongDetails;
