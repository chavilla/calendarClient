import React from "react";
import Navbar from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/Calendar-messages-es";
import moment from "moment";
import "moment/locale/es";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../redux/actions/uiAction";
import { deleteActiveEvent, SetActiveEvent } from "../../redux/actions/eventAction";
import AddNewFab from "../ui/AddNewFab";
import DeleteEventFab from "../ui/DeleteEventFab";
moment.locale("es");
const localizer = momentLocalizer(moment);

const CalendarScreen = () => {

  const dispatch = useDispatch();

  // get the events on store
   const { calendar: { events, activeEvent },  } = useSelector(state => state);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // onDoubleClick
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  }

  // onSelect
  const onSelect = (e) => {
    dispatch(SetActiveEvent(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) =>{
    dispatch( deleteActiveEvent());
  }

  // setting styles  <calendar />
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages = { messages }
        eventPropGetter = { eventStyleGetter }
        onDoubleClickEvent = { onDoubleClick }
        onSelectEvent = { onSelect }
        onSelectSlot={ onSelectSlot }
        selectable = { true }
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
      <AddNewFab />
      { activeEvent &&
        <DeleteEventFab />
       }
    </div>
  );
};

export default CalendarScreen;
