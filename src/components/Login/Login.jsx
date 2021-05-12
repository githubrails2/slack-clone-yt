import { Button } from "@material-ui/core";
import { LoginContainer, LoginInnerContainer } from "./Loginstyles";
import { auth, provider } from "../../config/firebase";
const Login = () => {
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch((err) => alert(err.message));
	};
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
					alt="Slack"
				/>
				<h1>Sign in to Slack CLone</h1>
				<p>papa.slack.com</p>
				<Button onClick={signIn}>Google Sign In</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
};

export default Login;
