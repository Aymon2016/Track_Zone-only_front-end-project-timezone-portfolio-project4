import { useState } from "react"
import { generate } from 'shortid'
import styled from 'styled-components'
import ClockList from "../component/clockList"
import LocalClock from "../component/localClock"


const LOCAL_CLOCK_INIT = {
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
}
const App = () => {


    const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT })
    const [clocks, setClocks] = useState([])

    const updateLocalClock = (data) => {

        setLocalClock({
            ...localClock,
            ...data,
        })
    }
    const deleteClock = (id) => {
        const deletedClock = clocks.filter((item) => item.id !== id)
        setClocks(deletedClock)
    }

    const createClock = (clock) => {
        clock.id = generate()
        setClocks([...clocks, clock])
    }
    const updateClock = (updatingClock) => {
        const id = updatingClock.id
        const editClock = clocks.map((clock) => {
            if (clock.id === id) {
                return updatingClock
            }
            return clock
        })
        setClocks(editClock)
    }

    return (
        <Container>
            <LocalClock createClock={createClock} localClock={localClock} updateLocalClock={updateLocalClock} />

            <ClockList deleteClock={deleteClock} updateClock={updateClock} clocks={clocks} />
        </Container>
    )
}

const Container = styled.div`
  
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #b2beb5;
  
`

export default App