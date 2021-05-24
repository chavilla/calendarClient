import React from 'react'

const CalendarEvent = ({ event }) => {
	
	const { title, user: {name}} = event;

	return (
		<div className='event__calendar'>
			<span>{ title }</span>
			<strong>--{ name }</strong>
		</div>
	)
}

export default CalendarEvent
