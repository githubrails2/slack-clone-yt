import {
	Add,
	Apps,
	BookmarkBorder,
	Create,
	Drafts,
	ExpandLess,
	ExpandMore,
	FiberManualRecord,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption/SidebarOption";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./styles";
import { auth, db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const Sidebar = () => {
	const [channels] = useCollection(db.collection("rooms"));
	const [user] = useAuthState(auth);
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Papa Fam HQ</h2>
					<h3>
						<FiberManualRecord />
						{user?.displayName}
					</h3>
				</SidebarInfo>
				<Create />
			</SidebarHeader>
			<SidebarOption Icon={InsertComment} title="Threads" />
			<SidebarOption Icon={Inbox} title="Mentions & reactions" />
			<SidebarOption Icon={Drafts} title="Saved Items" />
			<SidebarOption Icon={BookmarkBorder} title="Channel browser" />
			<SidebarOption Icon={PeopleAlt} title="People & user groups" />
			<SidebarOption Icon={Apps} title="Apps" />
			<SidebarOption Icon={FileCopy} title="File browser" />
			<SidebarOption Icon={ExpandLess} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMore} title="Channels" />
			<hr />
			<SidebarOption Icon={Add} addChannelOption title="Add Channel" />
			{channels?.docs.map((doc) => {
				return (
					<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
				);
			})}
		</SidebarContainer>
	);
};

export default Sidebar;
