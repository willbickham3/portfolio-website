import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AchievementList from '../components/AchievementList';
import { Link } from 'react-router-dom';

function AchievementsPage({ setAchievement }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [achievements, setAchievements] = useState([]);

    // RETRIEVE the entire list of achievements
    const loadAchievements = async () => {
        const response = await fetch('/achievements');
        const achievements = await response.json();
        setAchievements(achievements);
    } 
    

    // UPDATE a single achievement
    const onEditAchievement = async achievement => {
        setAchievement(achievement);
        redirect("/update");
    }


    // DELETE a single achievement  
    const onDeleteAchievement = async _id => {
        const response = await fetch(`/achievements/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/achievements');
            const achievements = await getResponse.json();
            setAchievements(achievements);
        } else {
            console.error(`Deletion of your achievement failed. Achievement ID = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the achievements
    useEffect(() => {
        loadAchievements();
    }, []);

    // DISPLAY the achievements
    return (
        <>
            <h2>List of Achievements</h2>
            <p>
                This is a list of all the achievements that are currently in the database. 
                From here, the user can add, edit, or delete achievements with the relevant buttons.
            </p>
            <Link to="/create">Add Achievement</Link>
            <AchievementList 
                achievements={achievements} 
                onEdit={onEditAchievement} 
                onDelete={onDeleteAchievement} 
            />
        </>
    );
}

export default AchievementsPage;