import React, { useState} from 'react'
import FadeLoader from "react-spinners/FadeLoader"

function Loader() {

    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    return (
        <div className="text-center align-middle">


            <FadeLoader color='#000' loading={loading} css='' size={30} />
        </div>
    )
}

export default Loader;