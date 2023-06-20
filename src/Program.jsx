import React from 'react';
import Map_Hitra from './assets/images/Map_Hitra.png';

const Program = () => {
  return (
    <div id="Program">
      <h1>
        Program
      </h1>
      <div className="bullets">
        <div>
          <h2>
            Fredag - Knarrlagsundet
          </h2>
          <p>
            18:00	Middag på Knarren 
            <br/>
            20:30	Lek og hygge i Knarrlaget 
            <br/>
            00:00	Ro i Knarrlaget
          </p>
        </div>
        <div>
          <h2>
            Lørdag - Fjellværøya
          </h2>
          <p>
            Vielse i Nordbotn Kirke på formiddagen, og Bryllupsfest i Strandheim på ettermiddagen
          </p>
        </div>
        <div>
          <h2>
            Søndag - Knarrlagsundet
          </h2>
          <p>
            12:00	Kaffeslabberas i Knarrlaget
            <br/>
            13:30	Søndagstur til Selvåg/langs Ulvøystien
          </p>
        </div>
      </div>
      <img
          className="map-hitra"
          src={Map_Hitra}
          alt="Map_Hitra"
        /> 
    </div>    
  );
};

export default Program;
