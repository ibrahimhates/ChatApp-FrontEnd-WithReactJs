import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Lobby = ({ joinRoom }) => {
	const [user, setUser] = useState();
	const [room, setRoom] = useState();
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				joinRoom(user, room);
			}}>
			<Form.Group>
				<Form.Control
					placeholder='name'
					onChange={(e) => setUser(e.target.value)}
				/>
				<Form.Control
					placeholder='room'
					onChange={(e) => setRoom(e.target.value)}
				/>
				<Button
					variant='success'
					type='submit'
					disabled={!user || !room}>
					Join
				</Button>
			</Form.Group>
		</Form>
	);
};

export default Lobby;
