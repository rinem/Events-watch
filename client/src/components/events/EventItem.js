import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventContext from '../../context/event/eventContext';
import moment from 'moment';

const EventItem = ({ event }) => {
	const eventContext = useContext(EventContext);
	const { deleteEvent, setCurrent, clearCurrent } = eventContext;

	const { _id, name, description, email, phone, date } = event;

	const onDelete = () => {
		deleteEvent(_id);
		clearCurrent();
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>{name} </h3>
			<h5 className='text-left'>{description} </h5>
			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open' /> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone' /> {phone}
					</li>
				)}
				{date && <li>Date : {moment(date).format('MMM Do YYYY')}</li>}
			</ul>
			<p>
				<button
					className='btn btn-dark btn-sm'
					onClick={() => setCurrent(event)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

EventItem.propTypes = {
	event: PropTypes.object.isRequired,
};

export default EventItem;
