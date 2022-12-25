import React, { useEffect } from 'react'
import styled from 'styled-components'
import ClockDisplay from '../shared/clockDisplay'
import useClock from '../../hooks/useClock/useClock'
import ClockAction from '../shared/clockAction'
import useTimer from '../../hooks/useTimer/useTimer'
const LocalClock = ({ createClock, localClock, updateLocalClock }) => {

    const { date, dateUtc, timezone, offset } = useClock(localClock.timezone, localClock.offset)
    useEffect(() => {
        updateLocalClock({
            date,
            timezone,
            offset,
        });
    }, [date]);
    const timer = useTimer(date)
    if (!timer) return
    return (
        <>
            <Container>
                {timer && (
                    <ClockDisplay
                        date={timer}
                        offset={offset}
                        timezone={timezone}
                        title={localClock.title}
                    />
                )}
            </Container>

            <ClockAction
                createAndDeleteClock={createClock}
                localClock={localClock}
                updateClock={updateLocalClock}
            />

        </>


    )
}
const Container = styled.div`
    margin:5% 5%  0;
    padding:5% ;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #6e7f80;
  
`

export default LocalClock