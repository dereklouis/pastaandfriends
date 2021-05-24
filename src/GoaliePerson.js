const GoaliePerson = (props) => {
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
          <p className="playerHeight">
            Height: <span className="bold">{props.player.height}</span>
          </p>
          <p className="playerCurrentAge">
            Age: <span className="bold">{props.player.currentAge}</span>
          </p>
          <p className="playerBirthCountry">
            Birth Country:{' '}
            <span className="bold">{props.player.birthCountry}</span>
          </p>
          {props.player.birthStateProvince ? (
            <p className="playerBirthCity">
              Birth City: <span className="bold">{props.player.birthCity}</span>
            </p>
          ) : (
            <p className="playerShootsCatches">
              Shoots/Catches:{' '}
              <span className="bold">{props.player.shootsCatches}</span>
            </p>
          )}
          <p className="playerWeight">
            Weight: <span className="bold">{props.player.weight}</span>
          </p>
          <p className="playerBirthday">
            Birthday: <span className="bold">{props.player.birthDate}</span>
          </p>
          {props.player.birthStateProvince && (
            <p className="playerBirthStateProvince">
              Birth State/Province:{' '}
              <span className="bold">{props.player.birthStateProvince}</span>
            </p>
          )}
          {props.player.birthStateProvince ? (
            <p className="playerShootsCatches">
              Shoots/Catches:{' '}
              <span className="bold">{props.player.shootsCatches}</span>
            </p>
          ) : (
            <p className="playerBirthCity">
              Birth City: <span className="bold">{props.player.birthCity}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoaliePerson;
