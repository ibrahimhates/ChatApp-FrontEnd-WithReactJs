import { Button } from 'react-bootstrap';
import MessageContainer from './MessageContainer';
import SendMessage from './SendMessage';
import ConnectedUsers from './ConnectedUsers';
const Chat = ({ messages, sendMessage, closeConnection, users }) => {
	return (
		<div>
			<Button variant='danger' onClick={() => closeConnection()}>
				Leave Room
			</Button>
			<ConnectedUsers users={users} />
			<div className='chat'>
				<MessageContainer messages={messages} />
				<SendMessage sendMessage={sendMessage} />
			</div>
		</div>
	);
};

export default Chat;
