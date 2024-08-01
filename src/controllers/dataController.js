const fs = require('fs');
const path = require('path');

exports.getData = (req, res) => {
    const filePath = path.join(__dirname, '../data/dummyData.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err.message);
            return res.status(500).json({ error: 'Error reading data file' });
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON data:', parseError.message);
            return res.status(500).json({ error: 'Error parsing JSON data' });
        }

        const { filterfield, filter } = req.query;
        if (filterfield && filter) {
            jsonData = jsonData.filter(item => item[filterfield] == filter);
        }

        if (req.query.sortby) {
            jsonData = jsonData.sort((a, b) => {
                if (a[req.query.sortby] < b[req.query.sortby]) return -1;
                if (a[req.query.sortby] > b[req.query.sortby]) return 1;
                return 0;
            });
        }

        res.json(jsonData);
    });
};
