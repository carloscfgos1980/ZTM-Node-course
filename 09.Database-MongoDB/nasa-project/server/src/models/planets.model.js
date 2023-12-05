const { parse } = require('csv-parse');

const planets = require('./planets.mongo');

const path = require('path');

const fs = require('fs');

const habitablePlanets =[]

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6; // This is are physical condictions for habitable planets. Some weirdo chichat
}

function loadPlanetsData(){
    return new Promise((resolve, reject)=>{
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment:'#',
                columns: true
            }))
            .on('data', async (data)=>{
                if(isHabitablePlanet(data)){
                    // TODO: Repplace below create with insert + update = upsert
                    // await planets.create({
                    //     keplerName:data.kepler_name,
                    // });
                }
            })
            .on('err', (err)=>{
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve();
            });
        });
}
function getAllPlanets(){
    return habitablePlanets
}

  module.exports = {
    loadPlanetsData,
    getAllPlanets,
  }