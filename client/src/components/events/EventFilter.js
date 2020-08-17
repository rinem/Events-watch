import React, { useContext, useRef, useEffect } from 'react';
import EventContext from '../../context/event/eventContext';

const EventFilter = () => {
	const eventContext = useContext(EventContext);
	const text = useRef('');

	const { filterEvents, clearFilter, filtered } = eventContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = e => {
		if (text.current.value !== '') {
			filterEvents(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Search Events...'
				onChange={onChange}
			/>
		</form>
	);
};

export default EventFilter;
