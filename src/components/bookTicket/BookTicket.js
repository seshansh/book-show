
import React, { useState } from 'react'
import './BookTicket.css'
import { useNavigate } from 'react-router-dom';


const BookTicket = ({details}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [textError,setTextError]=useState(false);
    const navigate=useNavigate('');

    const showTime=details.show.schedule.days[0]+ " at "+ details.show.schedule.time;

    const handleClick = () => {
        if (!name || !phone) {
            setTextError(true);
            return;
        }
        setTextError(false);
        const item = {
            userName: name,
            contact: phone,
            schedule:{
                movieName:details.show.name,
                language:details.show.language,
                time:showTime

            }
        }

        localStorage.setItem('ticket', JSON.stringify(item));

        alert(`Your booking confirmed for the show name ${details.show.name}`);
        
        navigate('/');
    }

    return (
        <div className='book-show-container'>
            <div className='book-form'>
                <div className='user-data'>
                    <input placeholder='Name*' type='text' onChange={(e) => setName(e.target.value)} />
                    <input placeholder='Contact number*' type='text' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='pre-field-data'>
                    <div>&#x2022; {details.show.name}&nbsp;&nbsp; </div>
                    <div>&#x2022; {details.show.language}&nbsp; &nbsp;</div>
                    <div>&#x2022; {showTime}&nbsp;&nbsp; </div>
                </div>
            </div>
            {textError?<p className='err-msg'>Please enter Name & Phone Number</p>:""}
            <button onClick={handleClick}>Book</button>
        </div>
    )
}

export default BookTicket;

