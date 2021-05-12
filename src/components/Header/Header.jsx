import {
	HeaderAvatar,
	HeaderContainer,
	HeaderLeft,
	HeaderRight,
	HeaderSearch,
} from "./styles";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
const Header = () => {
	const [user] = useAuthState(auth);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={() => auth.signOut()}
					src={user?.photoURL}
					alt={user.displayName}
				/>
				<AccessTime />
			</HeaderLeft>
			<HeaderSearch>
				<Search />
				<input placeholder="Papa FAM" />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutline />
			</HeaderRight>
		</HeaderContainer>
	);
};

export default Header;
