import logo from '../assets/logo.svg';
let altText = 'Website logo';
let logoStyling ={
    width: '6vw'
};
let Logo = ()=>{
    return(
        <img className="logo" src={logo} style={logoStyling} alt={altText} />
    );
};
export default Logo;