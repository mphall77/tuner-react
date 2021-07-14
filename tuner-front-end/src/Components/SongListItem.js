import React from "react";

const SongListItem = ({ song, id }) => {
	return (
		<tr>
			<td>
				<a href="#" target="_blank" rel="noreferrer">
					{song.name}
				</a>
			</td>
			<td>{song.artist}</td>
			<td>{song.time}</td>
			<td>{song.isFavorite ? <span>✅</span> : <span>🧐</span>}</td>
		</tr>
	);
};

export default SongListItem;
