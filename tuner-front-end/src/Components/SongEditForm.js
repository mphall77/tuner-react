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
		is_favorite: "",
	});

	const handleTextChange = (e) => {
		//  setSelectedSong(prevSelectedSong =>{...prevSelectedSong, [e.target.name]: e.target.value);
		setSelectedSong({ ...selectedSong, [e.target.name]: e.target.value });
		console.log("selected song:", selectedSong);
	};

	const handleCheckbox = (e) => {
		setSelectedSong({ ...selectedSong, [e.target.name]: e.target.checked });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateSong(selectedSong);
		history.push(`/songs/${id}`);
		console.log("pushed");
	};

	const fetchSong = async () => {
		try {
			const res = await axios.get(`${API}/songs/${id}`);
			setSelectedSong(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	const updateSong = async () => {
		console.log("in updateSong", selectedSong);
		try {
			const newSong = selectedSong;
			setSelectedSong(newSong);
			console.log("new SONG", selectedSong);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchSong();
	}, []);

	return (
		<section className="Edit">
			<h1>Let's change it up</h1>
			<form>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={selectedSong.name}
						onChange={handleTextChange}
						size="50"
					/>
				</label>
				<label>
					Artist:
					<input
						type="text"
						name="artist"
						value={selectedSong.artist}
						onChange={handleTextChange}
					/>
				</label>
				<label>
					Album:
					<input
						type="text"
						name="album"
						value={selectedSong.album}
						onChange={handleTextChange}
						placeholder="Album"
					/>
				</label>
				<label>
					Time:
					<input
						type="text"
						name="time"
						value={selectedSong.time}
						onChange={handleTextChange}
						required
					/>
				</label>
				<label>
					Favorite:
					<input
						type="checkbox"
						name="is_favorite"
						// checked={true}
						onChange={handleCheckbox}
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
