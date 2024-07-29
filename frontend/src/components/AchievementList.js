import React from 'react';
import Achievement from './Achievement';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function AchievementList({ achievements, onDelete, onEdit }) {
    return (
        <table id="achievements">
            <caption>Add and Edit Achievements</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {achievements.map((achievement, i) => 
                    <Achievement 
                        achievement={achievement} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default AchievementList;
