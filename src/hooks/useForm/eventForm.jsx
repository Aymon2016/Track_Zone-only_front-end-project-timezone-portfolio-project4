import { useState } from "react"
import { generate } from 'shortid'
import Button from '../../component/ui/button'


const EventForm = ({ values, handleClock, handleClose }) => {

    const [formValues, setFormValues] = useState({
        id: generate(),
        clockId: values,
        title: '',
        date: '',
        time: '',
        timezone: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target

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

            <Button type="Submit">Submit</Button>
        </form>
    )
}


export default EventForm