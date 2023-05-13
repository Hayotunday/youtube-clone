import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);

	const { searchTerms } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet,id&q=${searchTerms}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerms]);

	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
				Search Results for:{" "}
				<span style={{ color: "#F31503" }}>{searchTerms}</span> videos
			</Typography>

			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
