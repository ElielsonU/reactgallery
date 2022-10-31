import React from "react"

class MainPage extends React.Component {
    render() {
        return (
        <React.Fragment>
            <form method="post" action="http://localhost:8000/image">
            <input type="file" name="img" id="img" />
            <button type="submit">Submit</button>
            </form>
            <a href=""></a>
        </React.Fragment>
        )
    }
}

export default MainPage 