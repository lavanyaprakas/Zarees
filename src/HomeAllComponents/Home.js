import React from 'react';
import '../App.css';
import Banner from './Banner';
import Classification from './Classification';
import Navbar from './Navbar';



function Home(props) {
return(

    <div className="Home">
        
        <Navbar/>
        <Banner/>
        <Classification/>
        
            


    </div>
);

}
export default Home;
