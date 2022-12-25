import React, { useState, useEffect } from 'react'
import useClock from '../../../hooks/useClock/useClock'
import useEvent from '../../../hooks/useEvent/useEvent'
import ClockAction from '../../shared/clockAction'
import ClockDisplay from '../../shared/clockDisplay'
import EventAction from './event/eventAction'
import EventDisplay from './event/eventDisplay'
import styled from 'styled-components'
import Button from '../../ui/button'
import useTimer from '../../../hooks/useTimer/useTimer'

const ClockListItem = ({ clock, updateClock, deleteClock }) => {
    const [event, setEvent] = useState([])
    const [eventTogle, setEventTogle] = useState(false)

    const { date, timezone, offset } = useClock(clock.timezone, clock.offset)
    const { allEvents, getEvents, createEvent } = useEvent()

    useEffect(() => {
        const allevent = getEvents('isArray=true')

        setEvent(allevent)
    }, [allEvents])

    const timer = useTimer(date)

    if (!date || !timer) return

    return (
        <Container>
            <ClockDisplay
                date={timer}
                title={clock.title}
                timezone={timezone}
                offset={offset}
            />
            <Button onClick={() => setEventTogle(!eventTogle)}>Event see:</Button>
            {eventTogle ?
                <EventDisplay allEvents={event} />
                : ''}
            <EventAction createEvent={createEvent} clockId={clock.id} />
            <ClockAction
                createAndDeleteClock={deleteClock}
                local={false}
                localClock={clock}
                updateClock={updateClock} />
        </Container>
    )
}
const Container = styled.div`
  padding:2%
   background-color: #8aa0ae;
  
`

export default ClockListItem