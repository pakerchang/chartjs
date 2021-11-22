import React from "react";
import { makeStyles } from "@mui/styles";
import { Doughnut } from "react-chartjs-2";

const data = {
	// labels: ["Red", "Blue", "Yellow", "Green"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
			],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
			borderWidth: 1,
		},
	],
};

export default function ChartPie() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Asset Distribution</h2>

			<Doughnut data={data} />

			<PieInfo />
			<PieInfo />
			<PieInfo />
			<PieInfo />
			<PieInfo />
		</div>
	);
}

const PieInfo = () => {
	return <p>I'm Pie Circle Detail</p>;
};

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& h2": {
			marginBottom: 30,
		},
	},
});
