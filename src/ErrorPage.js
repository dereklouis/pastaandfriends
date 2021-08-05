import './styles/ErrorPage.css';

const ErrorPage = (props) => {
  return (
    <div id="errorPageContainer" className="FCAIC">
      <div id="errorRow">
        <p className="four">4</p>
        <img alt="Bruins Logo" id="errorLogo" src="images/bruinsLogo.png" />
        <p className="four">4</p>
      </div>
      <p id="PNF">PAGE NOT FOUND</p>
    </div>
  );
};

export default ErrorPage;
