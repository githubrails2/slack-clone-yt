import { useDispatch } from "react-redux";
import { enterRoom } from "../../../features/appSlice";
import { SidebarOptionChannel, SidebarOptionContainer } from "./styles";
import { db } from "../../../config/firebase";
const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
	const dispatch = useDispatch();

	const addChannel = () => {
		const channelName = prompt("Enter a channel name");

		if (channelName) {
			db.collection("rooms").add({
				name: channelName,
			});
		}
	};
	const selectChannel = () => {
		if (id) {
			dispatch(
				enterRoom({
					roomId: id,
				})
			);
		}
	};
	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChannel : selectChannel}
		>
			{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span>
					{title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	);
};

export default SidebarOption;
