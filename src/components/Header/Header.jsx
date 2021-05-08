import {
	HeaderAvatar,
	HeaderContainer,
	HeaderLeft,
	HeaderRight,
	HeaderSearch,
} from "./styles";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar />
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
