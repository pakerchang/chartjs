import React from "react";
import { Button } from "@mui/material";
import { MailOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export default function Header() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MailOutlined />
			<Button className={classes.button} variant="outlined">
				USER NAME
			</Button>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "right",
		alignItems: "center",
		padding: 10,
		"& button": {
			marginLeft: 10,
		},
	},
});
