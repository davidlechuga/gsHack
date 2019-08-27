const FbApp = require('../Firebase');
const db = FbApp.firestore();

function Perfiles (req, res){
    db.collection('perfiles').get().then(snapshot => {
        let tProfiles;
        snapshot.array.forEach(doc => {
            let opinion = "";
            for(profiles of doc.data());
            tProfiles += profiles;
        });
        res.send(tProfiles);
    })

}

module.exports = Perfiles;