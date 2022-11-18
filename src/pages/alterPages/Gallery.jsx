import React from "react";
import { useState } from "react";

function Gallery() {

    let [image, setImage] = useState(1)

    function updateGallery(e) {
        fetch(`http://localhost:8000/image/${image+Number(e.target.value)+8}`)
            .then(res => res.json()).then(console.log)
            .catch(err => {
                if (Number(e.target.value)+image <= 0){
                    console.log(err)
                } else {
                    setImage(Number(e.target.value)+image)
                }
            })
    }
    return (
        <React.Fragment>
            <section>
                <img className="galleryImages" src={`http://localhost:8000/image/${image}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+1}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+2}`} alt="API img"></img>
            </section>
            <section>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+3}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+4}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+5}`} alt="API img"></img>
            </section>
            <section>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+6}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+7}`} alt="API img"></img>
                <img className="galleryImages" src={`http://localhost:8000/image/${image+8}`} alt="API img"></img>
            </section>
            <section>
                <button onClick={updateGallery} value={-1}>{"<<"}</button>
                <button onClick={updateGallery} value={1}>{">>"}</button>
            </section>
            
        </React.Fragment>
)
}

export default Gallery