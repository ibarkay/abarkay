import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { AppBar, Toolbar } from "@material-ui/core";

// --------CSS---------
import "./Css/App.css";
// -------statics---------
import backIMG from "./img/IMG_5640.jpg";
import Logo from "./img/logos/l.png";
// ------font-theming------
const theme = createMuiTheme({
	typography: {
		fontFamily: ["Rubik", "cursive"].join(","),
	},
});

// ------------------------

export default function App() {
	return (
		<React.Fragment>
			<MuiThemeProvider theme={theme}>
				<div className="background">
					<AppBar position="sticky" style={{ background: "none" }}>
						<Toolbar edge="start">
							<img src={Logo} alt="logo" style={{ height: 40 }} color="white" />
						</Toolbar>
					</AppBar>
					<CssBaseline />

					<Container maxWidth="l">
						<Typography variant="h1" align="center">
							אשדות ברקאי טיולי כרכרות סוסים
						</Typography>
						<Typography variant="h1" align="center">
							english text
						</Typography>
					</Container>
				</div>
			</MuiThemeProvider>
		</React.Fragment>
	);
}
