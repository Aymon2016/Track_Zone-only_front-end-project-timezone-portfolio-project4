import styled from 'styled-components'
import { format } from 'date-fns';
const ClockDisplay = ({ date, title, timezone, offset }) => {

    let offsetHrs = offset / 60;
    return (
        <Container>
            <div>
                <h6>Title: {title}</h6>
                <h6>{format(date, 'yyyy-MM-dd hh:mm:ss aaa')}</h6>
                <p>
                    {timezone}
                    {offsetHrs > 0 ? `+${Math.abs(offsetHrs)}` : `-${Math.abs(offsetHrs)}`}
                </p>
            </div>
        </Container>
    )
}

const Container = styled.div`
  padding:5%
  
`

export default ClockDisplay