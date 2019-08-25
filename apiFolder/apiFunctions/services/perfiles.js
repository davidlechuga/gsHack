const FbApp = require('./firebase');
const db = FbApp.firestore();

function Perfiles (req, res){
    db.collection('perfiles').get().then(snapshot => {
        snapshot.array.forEach(doc => {
            let opinion = "";
            for rank of doc.data;
            
        });
    })

}

module.exports = Perfiles;