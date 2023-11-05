const ConnectedUsers = ({ users }) => {
	return (
		<div className='user-list justify-content-center'>
			<h4>Connected Users</h4>
			{users.map((u, index) => (
				<h6 className='text-success' key={index}>
					{u}
				</h6>
			))}
		</div>
	);
};

export default ConnectedUsers;
