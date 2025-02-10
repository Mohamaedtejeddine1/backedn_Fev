const os = require('os');

module.exports.getOsInformation = (req, res) => {
    try {
        const  getOsInformation  = {
            hostname: os.hostname(),
            platform: os.platform(),
            type: os.type(),
          
        };
        res.json(getOsInformation );
    } catch (error) {
        res.status(500).json({ error: "Erreur "  });
    }
};