import { MessageContainer, MessageInfo } from "./styles";

const Message = ({ message, timestamp, user, userImage }) => {
	console.log(timestamp);

	return (
		<MessageContainer>
			<img src={userImage} alt={user} />
			<MessageInfo>
				<h4>
					{user} <span>{timestamp?.toDate().toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>
	);
};

export default Message;
