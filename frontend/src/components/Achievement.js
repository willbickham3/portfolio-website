import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

// import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { GrEdit } from "react-icons/gr";
import { TbHttpDelete } from "react-icons/tb";


function Achievement({ achievement, onEdit, onDelete }) {
    return (
        <tr>
            <td>{achievement.name}</td>
            <td>{achievement.count}</td>
            <td>{achievement.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><TbHttpDelete onClick={() => onDelete(achievement._id)} /></td>
            <td><GrEdit onClick={() => onEdit(achievement)} /></td>
        </tr>
    );
}

export default Achievement;