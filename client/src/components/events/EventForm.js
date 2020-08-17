import React, { useState, useContext, useEffect } from 'react';
import EventContext from '../../context/event/eventContext';

const EventForm = () => {
	const eventContext = useContext(EventContext);

	const { addEvent, updateEvent, clearCurrent, current } = eventContext;

	useEffect(() => {
		if (current !== null) {
			setEvent(current);
		} else {
			setEvent({
				name: '',
				description: '',
				email: '',
				phone: '',
				date: '',
			});
		}
	}, [eventContext, current]);

	const [event, setEvent] = useState({
		name: '',
		description: '',
		email: '',
		phone: '',
		date: '',
	});

	const { name, description, email, phone, date } = event;

	const onChange = e => setEvent({ ...event, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			addEvent(event);
		} else {
			updateEvent(event);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-danger'>{current ? 'Edit Event' : 'Add Event'}</h2>
			<input
				type='text'
				placeholder='Event Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<textarea
				type='text'
				placeholder='Description'
				name='description'
				value={description}
				onChange={onChange}
			></textarea>

			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<input type='date' name='date' value={date} onChange={onChange} />
			<div>
				<input
					type='submit'
					value={current ? 'Update Event' : 'Add Event'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default EventForm;
