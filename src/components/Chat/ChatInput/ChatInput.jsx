import { Button } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatInputContainer } from "./styles";
import { auth, db } from "../../../config/firebase";
const ChatInput = ({ channelName, channelId, chatRef }) => {
	const [input, setInput] = useState("");
	const [user] = useAuthState(auth);
	const sendMessage = (e) => {
		e.preventDefault();
		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user.displayName,
			userImage: user?.photoURL,
		});
		chatRef.current.scrollIntoView({
			behavior: "smooth",
		});
		setInput("");
	};
	return (
		<ChatInputContainer>
			<form>
				<input
					placholder={`Message #${channelName}`}
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>

				<Button type="submit" hidden onClick={sendMessage}>
					Send Message
				</Button>
			</form>
		</ChatInputContainer>
	);
};

export default ChatInput;
