import React, {useState} from "react";
import UploadPage from "./alterPages/UploadPage"
import HomePage from "./alterPages/HomePage";
import Gallery from "./alterPages/Gallery"

function Main() {
    fetch("http://localhost:8000/updateGallery")
        .then(res => res.json())
        .catch(err => console.log(err))
    const [selectedPage, setSelectedPage ] = useState(<HomePage/>)
    const catchSelectedPage = e => {
        if(e.target.id === "Home"){setSelectedPage(<HomePage/>)}
        if(e.target.id === "UploadPage"){setSelectedPage(<UploadPage/>)}
        if(e.target.id === "Gallery"){setSelectedPage(<Gallery/>)}
    }
    return  (<React.Fragment>
                <header>
                    <a onClick={catchSelectedPage} id="Home">Home</a>
                    <a onClick={catchSelectedPage} id="UploadPage">Upload</a>
                    <a onClick={catchSelectedPage} id="Gallery">Gallery</a>
                </header>
                <hr />
                <h1>React Gallery <img className="reactLogo" src={process.env.PUBLIC_URL + "logo192.png"} alt="React Logo"/></h1>
                <div className="actualPage">{selectedPage}</div>
            </React.Fragment>)
}

export default Main