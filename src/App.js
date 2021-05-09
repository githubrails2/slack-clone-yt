import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import styled from "styled-components";
import Chat from "./components/Chat/Chat";
const App = () => {
	return (
		<div className="app">
			<Router>
				<Header />
				<AppBody>
					<Sidebar />
					<Switch>
						<Route exact path="/">
							<Chat/>
						</Route>
					</Switch>
				</AppBody>
			</Router>
		</div>
	);
};

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
