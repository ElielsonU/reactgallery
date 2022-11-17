import React from "react";

class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <p>Whats's the <strong>React Gallery</strong> ?</p>
                <p>the <strong>React Gallery</strong> is a project made by me: <a href="https://github.com/ElielsonU" target="_blank">Elielson Urbano</a>. I created this project for learn more about the <strong>React framework</strong> and the <strong>Express Library</strong>.</p>
                <p>This works like a cloud storage, but only for images. It works with an API and a React Server, when you upload a image the server makes a post request to the API and it returns a response that may contain an error or success message. You can access all uploaded images in the gallery, the server will make a get request to the API, this will return some of the images that were uploaded and the server the work of organizing all the images.</p>
                <p>I am very grateful to have finished this project, it will help me in future works, as it serves as a reference and learning. I believe you will like this project, enjoy!</p>
            </React.Fragment>
        )
    }
}

export default HomePage