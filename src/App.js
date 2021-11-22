import React from "react";
import Header from "./components/Header";
import Shortcuts from "./components/Shortcuts";
import ChartBar from "./components/ChartBar";
import ChartPie from "./components/ChartPie";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InfoOutlined } from "@mui/icons-material";

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>
				<div className={classes.leftPart}>
					<div className={classes.userInfo}>
						<h2>Hi, USER NAME</h2>
						<div className={classes.announcementTittle}>
							<InfoOutlined />
							<p>Announcement Tittle (YYYY-MM-DD)</p>
							<Button variant="text">More</Button>
						</div>
					</div>
					<Shortcuts />
					<ChartBar />
				</div>

				<div className={classes.rightPart}>
					<ChartPie />
				</div>
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		margin: 10,
		display: "flex",
		flexDirection: "column",
	},
	body: {
		display: "flex",
	},
	leftPart: {
		width: "70%",
	},
	rightPart: {
		width: "30%",
	},
	userInfo: {},
	announcementTittle: {
		display: "flex",
		alignItems: "center",
		"& p": {
			marginLeft: 15,
		},
		"& button": {
			marginLeft: 60,
		},
	},
});
