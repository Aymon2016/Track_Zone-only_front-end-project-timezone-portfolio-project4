import React from 'react'
import ClockListItem from './clockListItem/clockListItem'
import styled from 'styled-components'
const ClockList = ({ clocks, deleteClock, updateClock }) => {
    return (
        <Container>

            {clocks ?
                clocks.map((clock) => (
                    <div className="row">

                        <ClockListItem
                            deleteClock={deleteClock}
                            updateClock={updateClock}
                            key={clock.id} clock={clock} />


                    </div>
                ))
                :
                <p>Please, Create a Clock</p>}


        </Container>
    )
}

const Container = styled.div`
    margin:5% 0%;
  display: flex;    
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #c8c7bf;
  
`

export default ClockList