import { useEffect, useState } from "react"
import TIMEZONE_OFFSET from '../../constant/timezoneOffset'
import { getOffsets } from '../../utilis/utilis'
import Button from '../../component/ui/button'

const ClockForm = ({ values = { title: '', timezone: 'UTC', offset: 0 }, handleClose, handleClock }) => {

    const [formValues, setFormValues] = useState({ ...values })


    useEffect(() => {
        if (TIMEZONE_OFFSET[formValues.timezone]) {
            setFormValues((prev) => ({
                ...prev,
                offset: TIMEZONE_OFFSET[formValues.timezone]
            }))
        }
    }, [formValues.timezone])

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name === 'offset') {
            value = Number(value) * 60;
        }

        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        handleClock(formValues)


    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                < label htmlFor="title">Enter Title</label>
                <input
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                />

            </div>
            <div>
                <label htmlFor="timezone">Enter Timezone</label>
                <select
                    id="timezone"
                    name="timezone"
                    value={formValues.timezone}
                    onChange={handleChange}
                >
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="EDT">EDT</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>
            {(formValues.timezone === 'UTC' || formValues.timezone === 'GMT') && (

                <div>
                    <label htmlFor="offset">Enter Offset</label>
                    <select
                        id="offset"
                        name="offset"
                        value={formValues.offset / 60}
                        onChange={handleChange}
                    >
                        {getOffsets().map((offset) => (

                            <option
                                key={offset}
                                value={offset}>
                                {offset}
                            </option>
                        ))}
                    </select>
                </div>

            )}
            <Button type="Submit">Submit</Button>
        </form>
    )
}

export default ClockForm