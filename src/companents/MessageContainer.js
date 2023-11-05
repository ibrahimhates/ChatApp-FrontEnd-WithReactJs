const MessageContainer = ({ messages }) => {
	return (
		<div className='message-container'>
			{messages.map((m, index) => {
				return (
					<div key={index} className='user-message'>
						<div className='message bg-success'>{m.message}</div>
						<div className='from-user'>{m.user}</div>
					</div>
				);
			})}
		</div>
	);
};

export default MessageContainer;
