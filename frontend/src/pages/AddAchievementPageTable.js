import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddAchievementPageTable = () => {

    const [name, setName]       = useState('');
    const [count, setCount]         = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addAchievement = async () => {
        const newAchievement = { name, count, date };
        const response = await fetch('/achievements', {
            method: 'post',
            body: JSON.stringify(newAchievement),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Achievement Added.`);
        } else {
            alert(`The addition of your achievement failed. The status code = ${response.status}.`);
        }
        redirect("/achievements");
    };


    return (
        <>
        <article>
            <h2>Add a achievement</h2>
            <p>
                This page is where a user can add an achievement to the list (database). The user should include the name 
                of the achievement, the number of times completed, and the date it was completed.
            </p>
            
            <table id="achievements">
                <caption>Which achievement are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">Name:</label>
                        <input
                            type="text"
                            placeholder="Name of the achievement"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="count">Count:</label>
                        <input
                            type="number"
                            value={count}
                            placeholder="Count of the achievement"
                            onChange={e => setCount(e.target.value)} 
                            id="count" />
                    </td>

                    <td><label for="date">Date:</label>
                        <input
                            type="date"
                            placeholder="Primary date of the achievement"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Submit Changes:</label>
                        <button
                            type="submit"
                            onClick={addAchievement}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddAchievementPageTable;