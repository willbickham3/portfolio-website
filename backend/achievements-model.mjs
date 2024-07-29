// Models for the Achievement Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    'mongodb+srv://bickhamw:Wdbmbh19982001!@cluster0.ktbwrbe.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'There was an error in connecting to the database.' });
    } else  {
        console.log('Database has been successfully connected.');
    }
});

// SCHEMA: Define the collection's schema.
const achievementSchema = mongoose.Schema({
	name:    { type: String, required: true },
	count:     { type: Number, required: true },
    date:     { type: Date,   required: true, default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "achievements".
const achievements = mongoose.model('Achievements', achievementSchema);


// CREATE model *****************************************
const createAchievement = async (name, count, date) => {
    const achievement = new achievements({ 
        name: name, 
        count: count, 
        date: new Date(date)
    });
    return achievement.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveAchievements = async () => {
    const query = achievements.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveAchievementByID = async (_id) => {
    const query = achievements.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteAchievementById = async (_id) => {
    const result = await achievements.deleteOne({_id: _id});
    return result.deletedCount;
}


// UPDATE model *****************************************************
const updateAchievement = async (_id, name, count, date) => {
    const result = await achievements.replaceOne({_id: _id }, {
        name: name,
        count: count,
        date: new Date(date)
    });
    return { 
        _id: _id, 
        name: name,
        count: count,
        date: new Date(date) 
    }
}

// EXPORT the variables for use in the controller file.
export { createAchievement, retrieveAchievements, retrieveAchievementByID, updateAchievement, deleteAchievementById }