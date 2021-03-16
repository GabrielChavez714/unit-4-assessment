let myDigimon = [];
let id = 1;

module.exports = {
    getMyDigimon: (req, res) => {
        res.status(200).send(myDigimon);
    },

    catchDigimon: (req, res) => {
        const {digimon} = req.body;

        digimon.id = id;
        id++;

        myDigimon.push(digimon);
        res.status(200).send(myDigimon);
    },

    editName: (req, res) => {
        const {id} = req.params;

        const index = myDigimon.findIndex(element => element.id === +id);
        myDigimon.splice(index, 1);
        res.status(200).send(myDigimon);
    },

    releaseDigimon: (req, res) => {
        const{id} = req.params;

        const index = myDigimon.findIndex(element => element.id === +id);
        myDigimon.splice(index, 1);
        res.status(200).send(myDigimon)
    }
}
