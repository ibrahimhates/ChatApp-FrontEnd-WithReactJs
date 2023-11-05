import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lobby from './companents/Lobby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useState } from 'react';
import Chat from './companents/Chat';

const App = () => {
	const [connection, setConnection] = useState();
	const [messages, setMessages] = useState([]);

	const joinRoom = async (user, room) => {
		try {
			const connection = new HubConnectionBuilder()
				.withUrl('https://localhost:7157/chat')
				.configureLogging(LogLevel.Information)
				.build();

			connection.on('ReceiveMessage', (user, message) => {
				setMessages((messages) => [...messages, { user, message }]);
			});

			await connection.start();
			await connection.invoke('JoinRoom', { user, room });
			setConnection(connection);
		} catch (e) {
			console.log(e);
		}
	};

	const sendMessage = async (message) => {
		console.log(message);
	};
	return (
		<div>
			<div className='d-grid justify-content-center'>
				<h2>Chat App</h2>
				<hr className='line' />
			</div>
			{!connection ? (
				<div className='row d-grid justify-content-center align-items-center'>
					<Lobby joinRoom={joinRoom} />
				</div>
			) : (
				<Chat messages={messages} sendMessage={sendMessage} />
			)}
		</div>
	);
};

export default App;
