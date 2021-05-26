import './styles/Loading.css';

const Loading = () => {
  return (
    <div id="loadingContainer" className="FCAIC">
      <div id="loadingTitleContainer">
        <h1 id="loadingTitle">Loading</h1>
        <div id="loadingDot"></div>
      </div>
      <div id="loadingLogoWrapper">
        <img alt="Bruins Logo" id="bruinsLogo" src="bruinsLogo.png" />
      </div>
    </div>
  );
};

export default Loading;
