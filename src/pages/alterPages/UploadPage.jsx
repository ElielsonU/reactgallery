import React, {useState} from 'react';

function ImageUpload() {
    
    const [selectedImage, setSelectedImage] = useState()
    const [response, setResponse] = useState("")
    const [Input, setInput] = useState(<input type="file" name='img' onChange={changeHandler} accept="image/png,image/jpeg"/>)
    
    function changeHandler (e) {
        setResponse("")
        setSelectedImage(e.target.files[0])
    }

    function handleSubmission (){
        const img = new FormData()
            img.append("img", selectedImage, selectedImage.name)
            fetch("http://localhost:8000/imageUpload" , {
                method: "POST",
                body: img
            }).then(res => res.json()).then(res => setResponse(res.msg)).catch(console.log)
            setSelectedImage("")
            setInput(<h2>Wait some time</h2>)
            setTimeout(() => {
                setInput(<input type="file" name='img' onChange={changeHandler} accept="image/png,image/jpeg"/>)
            }, 5000)
        }

        return (
            <React.Fragment>
            <h1>Upload your images</h1>
            {Input}
            {selectedImage?(
                <div>
                    <h3>Filename: {selectedImage.name}</h3>
                    <h3>SelectedImageType: {selectedImage.type}</h3>
                    <h3>Size in Megabytes: {(selectedImage.size*Math.pow(10, -6)).toFixed(2)}MB {selectedImage.size>10485760?<strong>higher than allowed!!!</strong>: <button onClick={handleSubmission}>Submit</button>}
                    </h3>
                    <h3>
                        lastModifiedDate: {selectedImage.lastModifiedDate.toLocaleDateString()}
                    </h3>
                    <h2>{response}</h2>
                </div>
                ):(
                	<h3>Select a file for details</h3>
            )}
        </React.Fragment>
    )
}

export default ImageUpload