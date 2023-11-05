import MessageContainer from './MessageContainer';
import SendMessage from './SendMessage';

const Chat = ({ messages, sendMessage }) => {
	return (
		<div>
			<div className='chat'>
				<MessageContainer messages={messages} />
				<SendMessage sendMessage={sendMessage} />
			</div>
		</div>
	);
};

export default Chat;
