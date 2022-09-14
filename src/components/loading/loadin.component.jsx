import logo from './loadinLogo.svg';
import './Loadin.styles.css';

function Loadin() {
  return (
    <div className="loadin">
      <img src={logo} className="loadin-logo" alt="logo" />
      <h1> Loading... </h1>
    </div>
  );
}

export default Loadin;
