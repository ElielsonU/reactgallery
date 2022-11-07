import React, {useState} from 'react';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState("")
    const changeHandler = e => setSelectedImage(e.target.files[0])
    const handleSubmission = () => {
            const img = new FormData()
            img.append("img", selectedImage, selectedImage.name)
            fetch("http://localhost:8000/imageUpload" , {
                method: "POST",
                body: img
            }).then(res => res.json()).then(console.log).catch(console.log)
        }
    return (
        <div>
            <input type="file" name='img' onChange={changeHandler}/>
            {selectedImage?(
                <div>
                    <p>Filename: {selectedImage.name}</p>
                    <p>SelectedImageType: {selectedImage.type}</p>
                    <p>Size in Megabytes: {(selectedImage.size*Math.pow(10, -6)).toFixed(2)}MB {selectedImage.size>78643200?<strong>higher than allowed!!!</strong>: null}
                    </p>
                    <p>
                        lastModifiedDate: {selectedImage.lastModifiedDate.toLocaleDateString()}
                    </p>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
                ):(
                	<p>Select a file for details</p>
            )}
        </div>
    )
}

export default ImageUpload