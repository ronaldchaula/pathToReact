import Nav from './Nav';
import Logo from './Logo'; //you must always quote the import from path
let Header = () =>{
return(
    <div className="header">
    <Logo location="../assets/logo.svg"/>
    <Nav/>
    </div>
);
};
export default Header;