import { Link } from "react-router-dom";

const SongListItem = ({ song, id }) => {
	return (
		<tr>
			<td>
				<Link to={`songs/${id}`}>{song.name}</Link>
			</td>
			<td>{song.artist}</td>
			<td>{song.album}</td>
			<td>{song.time}</td>
			<td>{song.isFavorite ? <span>✅</span> : <span>🧐</span>}</td>
		</tr>
	);
};

export default SongListItem;
