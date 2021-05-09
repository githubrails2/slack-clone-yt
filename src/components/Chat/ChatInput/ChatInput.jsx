import { Button } from "@material-ui/core";
import { useState } from "react";
import { ChatInputContainer } from "./styles";
import { db } from "../../../config/firebase";
import firebase from "firebase";
const ChatInput = ({ channelName, channelId, chatRef }) => {
	const [input, setInput] = useState("");
	console.log(channelName);
	const sendMessage = (e) => {
		e.preventDefault();
		if (!channelId) {
			return false;
		}
		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "Derick Matthews",
			userImage: "",
		});
		chatRef.current.scrollIntoView({
			behavior: "smooth",
		});
		setInput("");
	};
	return (
		<ChatInputContainer>
			<form>
				<input placholder={`Message #${channelName}`} />

				<Button
					type="submit"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					hidden
					onClick={sendMessage}
				>
					Send Message
				</Button>
			</form>
		</ChatInputContainer>
	);
};

export default ChatInput;
