import React, { useState, useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditAchievementPageTable = ({ achievementToEdit }) => {
 
    const [name, setName]       = useState(achievementToEdit.name);
    const [count, setCount]     = useState(achievementToEdit.count);
    const [date, setDate]       = useState(achievementToEdit.date);
    
    const redirect = useNavigate();
    console.log(date)
    const editAchievement = async () => {
        const response = await fetch(`/achievements/${achievementToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                count: count, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You have successfully edited your achievement.`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error in editing your achievement. Error ${response.status}. ${errMessage.Error}`);
        }
        redirect("/achievements");
    }

    return (
        <>
        <article>
            <h2>Edit a achievement</h2>
            <p>This is a page where a user can edit the achievements that are currently in the database. 
                The date will remain the same as it was if a new date is not specified.</p>
            <table id="achievements">
                <caption>Edit your achievement!</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="name">Achievement Name:</label>
                        <input
                            type="text"
                            placeholder="Name of your achievement"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label htmlFor="count">Count:</label>
                        <input
                            type="number"
                            value={count}
                            placeholder="Count of the achievement"
                            onChange={e => setCount(e.target.value)} 
                            id="count" />
                    </td>

                    <td><label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            placeholder="Primary date of the achievement"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label htmlFor="submit">Submit Changes:</label>
                        <button
                            type="submit"
                            onClick={editAchievement}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditAchievementPageTable;