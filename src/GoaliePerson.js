const GoaliePerson = (props) => {
  return (
    <div className="playerBoxPerson under">
      <h6 className="playerNameBack">{props.player.fullName.toUpperCase()}</h6>
      <div className="PSCircleRow">
        <div className="PSCircleBack FCAIC">
          <p className="position yellow">
            {props.player.primaryPosition.abbreviation}
          </p>
        </div>
        <div className="PSCircleBack FCAIC">
          <h3 className="playerNumber yellow">#{props.player.primaryNumber}</h3>
        </div>
        <div className="PSCircleBack FCAIC">
          <img
            alt="flag"
            className="flagBack"
            src={`/flags/${props.player.birthCountry}.png`}
          />
        </div>
        {props.player.captain === true ? (
          <div className="PSCircleBack FCAIC">
            <img alt="Captain" className="badge" src="captain.png" />
          </div>
        ) : (
          false
        )}
        {props.player.alternateCaptain === true ? (
          <div className="PSCircleBack FCAIC">
            <img
              alt="Alternate Captain"
              className="badge"
              src="alternate.png"
            />
          </div>
        ) : (
          false
        )}
      </div>
      <div className="wrapContainer">
        <div className="columnWrap">
          <p className="playerHeight PSRow yellow">
            HEIGHT: <span className="bold">{props.player.height}</span>
          </p>
          <p className="playerCurrentAge PSRow yellow">
            AGE: <span className="bold">{props.player.currentAge}</span>
          </p>
          <p className="playerBirthCountry PSRow yellow">
            BIRTH COUNTRY:{' '}
            <span className="bold">{props.player.birthCountry}</span>
          </p>
          {props.player.birthStateProvince ? (
            <>
              <p className="playerBirthCity PSRow yellow">
                BIRTH CITY:{' '}
                <span className="bold">{props.player.birthCity}</span>
              </p>
              <div className="PSDividingLine yellowBG"></div>
            </>
          ) : (
            <>
              <p className="playerShootsCatches PSRow yellow">
                SHOOTS/CATCHES:{' '}
                <span className="bold">{props.player.shootsCatches}</span>
              </p>
              <div className="PSDividingLine yellowBG"></div>
            </>
          )}
          <p className="playerWeight PSRow yellow">
            WEIGHT: <span className="bold">{props.player.weight}</span>
          </p>
          <p className="playerBirthday PSRow yellow">
            BIRTHDAY: <span className="bold">{props.player.birthDate}</span>
          </p>
          {props.player.birthStateProvince &&
            props.player.birthCountry === 'USA' && (
              <p className="playerBirthStateProvince PSRow yellow">
                BIRTH STATE:{' '}
                <span className="bold">{props.player.birthStateProvince}</span>
              </p>
            )}
          {props.player.birthStateProvince &&
            props.player.birthCountry !== 'USA' && (
              <p className="playerBirthStateProvince PSRow yellow">
                BIRTH PROVINCE:{' '}
                <span className="bold">{props.player.birthStateProvince}</span>
              </p>
            )}
          {props.player.birthStateProvince ? (
            <p className="playerShootsCatches PSRow yellow">
              SHOOTS/CATCHES:{' '}
              <span className="bold">{props.player.shootsCatches}</span>
            </p>
          ) : (
            <p className="playerBirthCity PSRow yellow">
              BIRTH CITY: <span className="bold">{props.player.birthCity}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoaliePerson;
