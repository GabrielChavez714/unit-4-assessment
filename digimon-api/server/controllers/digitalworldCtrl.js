
const axios = require('axios');
const { response } = require('express');



module.exports = {
    getFeralDigimon: (req, res) => {
        const digimonArray =[];
        const feralDigimonArray =[];
        let id = 1;

        axios.get(`https://digimon-api.vercel.app/api/digimon`)
            .then(response => { 
                feralDigimonArray.push(response.data);
                
                const feralDigimonMap = feralDigimonArray[0].map (e => {
                    e.id = id;
                    id++ 
                    return e
                })

                console.log(feralDigimonMap)

                for( i = 1; i <= 4; i++ ) {
                    const rand = Math.ceil(Math.random() * 99)

                    const found = feralDigimonMap.find(e => e.id === rand)

                    digimonArray.push(found)
                };
                res.status(200).send(digimonArray)
            })
            .catch(error => res.status(500).send(error))
    }
}
