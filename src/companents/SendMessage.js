import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const SendMessage = ({ sendMessage }) => {
	const [message, setMessage] = useState('');
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				sendMessage(message);
				setMessage('');
			}}>
			<InputGroup>
				<FormControl
					placeholder='message...'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<div className='input-append'>
					<Button disabled={!message} type='submit'>
						Send
					</Button>
				</div>
			</InputGroup>
		</Form>
	);
};

export default SendMessage;
