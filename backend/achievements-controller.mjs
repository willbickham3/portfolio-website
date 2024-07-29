// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as achievements from './achievements-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/achievements', (req,res) => { 
    achievements.createAchievement(
        req.body.name, 
        req.body.count, 
        req.body.date
        )
        .then(achievement => {
            console.log(`"${achievement.name}" was added to the collection.`);
            res.status(201).json(achievement);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was a failure to create the achievement. Please check spelling and formatting.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/achievements', (req, res) => {
    achievements.retrieveAchievements()
        .then(achievements => { 
            if (achievements !== null) {
                console.log(`All achievements have been retrieved.`);
                res.json(achievements);
                console.log(achievements)
            } else {
                res.status(404).json({ Error: 'There were no achievements found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The server could not retrieve your achievements.' });
        });
});


// RETRIEVE by ID controller
app.get('/achievements/:_id', (req, res) => {
    achievements.retrieveAchievementByID(req.params._id)
    .then(achievement => { 
        if (achievement !== null) {
            console.log(`"${achievement.name}" was retrieved, based on its ID.`);
            res.json(achievement);
        } else {
            res.status(404).json({ Error: 'Achievement does not exist or cannot be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Please ensure proper spelling/formatting.' });
    });

});


// UPDATE controller ************************************
app.put('/achievements/:_id', (req, res) => {
    achievements.updateAchievement(
        req.params._id, 
        req.body.name, 
        req.body.count, 
        req.body.date
    )
    .then(achievement => {
        console.log(`"${achievement.name}" was updated.`);
        res.json(achievement);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'There was an error in updating your achievement. Check spelling and formatting.' });
    });
});


// DELETE Controller ******************************
app.delete('/achievements/:_id', (req, res) => {
    achievements.deleteAchievementById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} achievement was deleted.`);
                res.status(200).send({ Success: 'Successfully deleted your achievement!' });
            } else {
                res.status(404).json({ Error: 'Failed to delete the requested achievement. Check spelling!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'No achievements exist to delete.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});