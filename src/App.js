import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import Spinner from "react-spinkit";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import Login from "./components/Login/Login";
import { Header, Sidebar } from "./components";
import { Chat } from "./components";
const App = () => {
	const [user, loading] = useAuthState(auth);
	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContent>
					<img
						src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
						alt="Slack Loading"
					/>
					<Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
				</AppLoadingContent>
			</AppLoading>
		);
	}
	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Switch>
								<Route exact path="/" component={Chat} />
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
};

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
const AppLoading = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 100px;
`;
const AppLoadingContent = styled.div``;
