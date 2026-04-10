
import * as geolib from 'geolib'
import db from '../db/db.js';

async function addSchool(req,res){

    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: "all fields (name, address, lat, long) required!" });
    }

    try {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        // send data to Database 
        await db.execute(query, [name, address, latitude, longitude]);
        
        res.status(201).json({ message: "School successfully added!" });
    } catch (err) {
        res.status(500).json({ error: "Database Error: " + err.message });
    }
}



async function listschool(req,res){
    const { latitude, longitude } = req.query;

 if (latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: "User location (lat, long) missing hai!" });
    }

    try {
        //collect all school from Database 
        const [schools] = await db.execute('SELECT * FROM schools');

        // Distance calculate and sort 
        const sortedSchools = schools.map(school => {
            const distance = geolib.getDistance(
                { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
                { latitude: school.latitude, longitude: school.longitude }
            );
            return { ...school, distance_km: Number((distance / 1000).toFixed(2)) };
        }).sort((a, b) => a.distance_km - b.distance_km);

        res.json(sortedSchools);
    } catch (err) {
        res.status(500).json({ error: "Server Error: " + err.message });
    }
}
export {addSchool , listschool}