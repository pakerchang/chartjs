import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";

export default function Shortcuts() {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<h2>Services Shortcuts</h2>
			<div className={classes.itemBar}>
				<Button>
					<PlaylistAdd fontSize="large" />
				</Button>
				{Array(5).map((item, index) => {
					return console.log(item, index);
					// let counter;
					// counter = item + 1;
					// return <ShortcutItems count={counter} />;
				})}
				<ShortcutItems count={1} />
				<ShortcutItems count={2} />
				<ShortcutItems count={3} />
				<ShortcutItems count={4} />
				<ShortcutItems count={5} />
			</div>
		</div>
	);
}

const ShortcutItems = ({ count }) => {
	const classes = useStyle();
	return (
		<div className={classes.items}>
			<div classes={classes.item__body}></div>
			<p>
				<strong>SHORTCUTS {count}</strong>
			</p>
		</div>
	);
};

const useStyle = makeStyles({
	root: {
		"& h2": {
			marginTop: 50,
			marginBottom: 20,
		},
	},
	itemBar: {
		display: "flex",
		alignItems: "center",

		"& button": {
			width: 80,
			height: 80,
		},
		"& p": {
			marginBottom: 5,
		},
	},

	items: {
		width: 100,
		height: 100,
		margin: 20,
		backgroundColor: "lightgrey",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		"& p": {
			textAlign: "center",
			fontSize: 10,
		},
	},
});
