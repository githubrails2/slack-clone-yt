import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatMessages,
} from "./styles";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput/ChatInput";

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderLeft>
          <h4>
            <strong>#Room Name</strong>
          </h4>
          <StarBorderOutlined />
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <p>
            <InfoOutlined />
            Details
          </p>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatMessages>{/**List messages */}</ChatMessages>
      <ChatInput
        //channaelName
        channelId={roomId}
      />
    </ChatContainer>
  );
};

export default Chat;
