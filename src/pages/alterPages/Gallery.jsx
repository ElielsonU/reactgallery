import React from "react";

function Gallery() {
    function updateGallery() {
        fetch("http://localhost:8000/updateGallery")
            .then(res => res.json()).then(console.log)
    }
    return (
        <React.Fragment>
            <section>
                <img className="galleryImages" src="http://localhost:8000/image/1" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/2" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/3" alt="API img"></img>
            </section>
            <section>
                <img className="galleryImages" src="http://localhost:8000/image/4" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/5" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/6" alt="API img"></img>
            </section>
            <section>
                <img className="galleryImages" src="http://localhost:8000/image/7" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/8" alt="API img"></img>
                <img className="galleryImages" src="http://localhost:8000/image/9" alt="API img"></img>
            </section>
            <button onClick={updateGallery}><img src={process.env.PUBLIC_URL + "resetIcon.png"} alt="reset icon" className="resetIcon"/></button>
        </React.Fragment>
)
}

export default Gallery