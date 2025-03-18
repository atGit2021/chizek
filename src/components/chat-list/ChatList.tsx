import List from "@mui/material/List";
import ChatListItem from "./chat-list-item/ChatListItem";

const ChatList = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        maxHeight: "80vh",
        overflow: "auto",
      }}
    >
      <ChatListItem />
    </List>
  );
};

export default ChatList;
