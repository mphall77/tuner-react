import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SongEditForm = () => {
	const { id } = useParams();
	let history = useHistory();

	const [selectedSong, setSelectedSong] = useState({
		name: "",
		artist: "",
		album: "",
		time: "",
		is_favorite: Boolean,
	});

	const fetchSong = async () => {
		try {
			const res = await axios.get(`${API}/songs/:${id}/edit`);
			setSelectedSong(res);
		} catch (err) {
			console.log(err);
		}
	};

	const updateSongList = async () => {
		try {
			let res = await axios.get(`${API}/songs/${id}`);
			console.log("Selected Song:", res);
			// const newSong = [...selectedSong];
			// newSong[] with id of ${id} = updatedSong
			// setSelectedSong(newSong);
		} catch (err) {
			console.log(err);
		}
	};

	const handleTextChange = (e) => {
		setSelectedSong({ ...selectedSong, [e.target.id]: e.target.value });
		// setSelectedSong((prevSelectedSong)=>[ ...prevSelectedSong, ([e.target.id]: e.target.value ]));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateSongList();
		history.push(`/songs/${id}`);
	};

	useEffect(() => {
		fetchSong();
	}, []);

	return (
		<section className="Edit">
			<h2>hi from edit</h2>
			<form>
				<label>
					Name:{" "}
					<input
						type="text"
						id="name"
						value={selectedSong.name}
						onChange={handleTextChange}
						placeholder="Song Title"
						required
					/>
				</label>
				<label>
					Artist:{" "}
					<input
						type="text"
						id="artist"
						value={selectedSong.artist}
						onChange={handleTextChange}
						placeholder="Name of Artist"
						required
					/>
				</label>
				<label>
					Album:{" "}
					<input
						type="text"
						id="album"
						value={selectedSong.album}
						onChange={handleTextChange}
						placeholder="Album"
						required
					/>
				</label>
				<label>
					Time:{" "}
					<input
						type="text"
						id="time"
						value={selectedSong.time}
						onChange={handleTextChange}
						placeholder="1:23"
						required
					/>
				</label>
				<label>
					Favorite:{" "}
					<input
						type="checkbox"
						id="is_favorite"
						value={selectedSong.is_favorite}
						onClick={handleTextChange}
						checked
					/>
				</label>
				<div className="submit-btn" onClick={handleSubmit}>
					<button>Submit</button>
				</div>
			</form>
			<Link to={`/songs/${id}`}>
				<button className="submit-btn">Back</button>
			</Link>
		</section>
	);
};

export default SongEditForm;
