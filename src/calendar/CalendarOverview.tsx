import * as React from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import {dateNice} from "./DateUtils";
import {otherCompetitions, otherEvents, regularSeason, trainingSessions} from "./CalendarMockData";

interface Props {
    group: string;
}

interface CalendarEvent {
    title: string,
    type: string,
    start: Date,
    end: Date,
    details: string
}

const emptyEvent:CalendarEvent = {
    title: 'unknown',
    type: 'unknown',
    start: new Date(),
    end: new Date(),
    details: ''
};

const CalendarOverview: React.FunctionComponent<Props> = (props) => {

    const localizer = momentLocalizer(moment);

    const [selectedEvent, setSelectedEvent] = React.useState(emptyEvent);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const myEventsList = [...regularSeason, ...otherCompetitions, ...trainingSessions, ...otherEvents];

    const getBackgroundColorForEvent = (eventType: string | undefined): string => {
        switch (eventType) {
            case 'Cup':
                return 'green';
            case 'Training session':
                return 'black';
            case 'Regular season (Home)':
                return 'darkblue';
            case 'Regular season (Away)':
                return 'blue';
            default:
                return 'grey';
        }
    };

    return (
        <Container>
            <h1 className="m-2">Calendar for {props.group}</h1>
            <p className="m-2">Training sessions, competitions and other events for your group</p>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${selectedEvent.title}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="mb-2">{`${selectedEvent.type}`}</h4>
                    <p className="mb-0">{`${dateNice(selectedEvent.start)}`}</p>
                    <p>{`${dateNice(selectedEvent.end)}`}</p>
                    <p>{`${selectedEvent.details}`}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="mt-5">
                <Col className="noPadding">
                    <div style={{ height: '500pt'}}>
                        <Calendar
                            localizer={localizer}
                            events={myEventsList}
                            defaultDate={moment().toDate()}
                            startAccessor="start"
                            endAccessor="end"
                            step={120}
                            onSelectEvent={event => {
                                setSelectedEvent(event);
                                handleShow();
                            }}
                            eventPropGetter={ event => {
                                return {
                                    style: {
                                        backgroundColor: getBackgroundColorForEvent(event.type),
                                    }
                                };
                            }}
                        />
                    </div>
                </Col>
            </Row>

        </Container>
    )
};

export default CalendarOverview;
