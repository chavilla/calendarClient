import { types } from "../types/types";

export const AddNewEvent = (event) => ({
	type: types.eventAddNew,
	payload: event,
});

export const SetActiveEvent = (event) =>({
	type: types.eventSetActive,
	payload: event
});

export const deleteActiveEvent = () =>({
	type: types.eventDeleteActive,
});

export const GetAllEvents = () => ({
	type: types.eventGetAll
})

export const eventUpdated = (event) => ({
	type: types.eventUpdated,
	payload: event,
});

export const eventDeleted = () =>({
	type: types.eventDeleted,
});