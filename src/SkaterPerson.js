const SkaterPerson = (props) => {
  return (
    <div className="playerBoxPerson under">
      <h6 className="playerName">{props.player.fullName.toUpperCase()}</h6>
      <div className="PSCircleRow">
        <div className="PSCircle FCAIC">
          <p className="position">
            {props.player.primaryPosition.abbreviation}
          </p>
        </div>
        <div className="PSCircle FCAIC">
          <h3 className="playerNumber">#{props.player.primaryNumber}</h3>
        </div>
        <div className="PSCircle FCAIC">
          <img
            alt="flag"
            className="flag"
            src={`/flags/${props.player.nationality}.png`}
          />
        </div>
        {props.player.captain === true ? (
          <div className="PSCircle FCAIC">
            <img alt="Captain" className="badge" src="captain.png" />
          </div>
        ) : (
          false
        )}
        {props.player.alternateCaptain === true ? (
          <div className="PSCircle FCAIC">
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
          <p className="playerHeight PSRow">
            HEIGHT: <span className="bold">{props.player.height}</span>
          </p>
          <p className="playerCurrentAge PSRow">
            AGE: <span className="bold">{props.player.currentAge}</span>
          </p>
          <p className="playerBirthCountry PSRow">
            BIRTH COUNTRY:{' '}
            <span className="bold">{props.player.birthCountry}</span>
          </p>
          {props.player.birthStateProvince ? (
            <>
              <p className="playerBirthCity PSRow">
                BIRTH CITY:{' '}
                <span className="bold">{props.player.birthCity}</span>
              </p>
              <div className="PSDividingLine"></div>
            </>
          ) : (
            <>
              <p className="playerShootsCatches PSRow">
                SHOOTS/CATCHES:{' '}
                <span className="bold">{props.player.shootsCatches}</span>
              </p>
              <div className="PSDividingLine"></div>
            </>
          )}
          <p className="playerWeight PSRow">
            WEIGHT: <span className="bold">{props.player.weight}</span>
          </p>
          <p className="playerBirthday PSRow">
            BIRTHDAY: <span className="bold">{props.player.birthDate}</span>
          </p>
          {props.player.birthStateProvince &&
            props.player.birthCountry === 'USA' && (
              <p className="playerBirthStateProvince PSRow">
                BIRTH STATE:{' '}
                <span className="bold">{props.player.birthStateProvince}</span>
              </p>
            )}
          {props.player.birthStateProvince &&
            props.player.birthCountry !== 'USA' && (
              <p className="playerBirthStateProvince PSRow">
                BIRTH PROVINCE:{' '}
                <span className="bold">{props.player.birthStateProvince}</span>
              </p>
            )}
          {props.player.birthStateProvince ? (
            <p className="playerShootsCatches PSRow">
              SHOOTS/CATCHES:{' '}
              <span className="bold">{props.player.shootsCatches}</span>
            </p>
          ) : (
            <p className="playerBirthCity PSRow">
              BIRTH CITY: <span className="bold">{props.player.birthCity}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkaterPerson;
