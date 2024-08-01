const express  = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = process.env.PORT || 3000;

const fetchData = async () => {
    try {
        const response = await axios.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
        fs.writeFileSync(path.join(__dirname, 'data', 'dummyData.json'), JSON.stringify(response.data));
        console.log('Data fetched and stored.');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

if (!fs.existsSync(path.join(__dirname, 'data', 'dummyData.json'))) {
    fetchData();
}

app.use('/api/data', dataRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});