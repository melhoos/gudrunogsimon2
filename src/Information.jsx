import React from 'react';
import Lottie from './common/Lottie';

import kimono from './assets/lotties/kimono.json';
import gift from './assets/lotties/gift.json';
import suitcase from './assets/lotties/suitcase.json';


const Information = () => {
  return (
    <div id="Information">
      <h1>
        Praktisk informasjon
      </h1>
      <div className="bullets">
        
        <div>
          <h2>
            Kleskode
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
          </h2>
          <p>
            Vi krysser fingrene for sommer og sol - kom sommerlig og pent kledd! 
          </p>
        </div>
        <div>
          <h2>
            Gaver
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
          </h2>
          <p>
            Det viktigste for oss er at du vil være med å feire dagen.
          </p>
          <p>
            Om du ønsker å gi en bryllupsgave finner dere gaveliste her og her. 
          </p>
        </div>
        <div>
          <h2>
            Pakkeliste
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
          </h2>
          <p>
            Været nord for polarsirkelen kan være så mangt - Ta med joggesko/tursko og allværsjakke, så kommer du langt!
          </p>
          <p>
            Sjekk {' '}
            <a
              href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/11-48728/Norge/Nordland/Steigen/Helnessund"
              target="_blank"
              rel="noopener noreferrer"
            >
                værmeldingen
            </a>
            {' '} på forhånd. Forhåpentligvis trenger du også solbriller!
        </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
