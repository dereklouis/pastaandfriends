const GoaliePerson = (props) => {
  return (
    <div className="playerBoxPerson under">
      <img
        alt="flag"
        className="flag"
        src={`/flags/${props.player.nationality}.png`}
      />
      <p className="position">{props.player.primaryPosition.abbreviation}</p>
      <h3 className="playerNumber">#{props.player.primaryNumber}</h3>
      <h6 className="playerName">{props.player.fullName}</h6>
      <div className="wrapContainer">
        <div className="columnWrapCenter">
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
