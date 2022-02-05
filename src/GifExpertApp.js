import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["rick morty"]);


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( elem => (
                        
                        <GifGrid 
                        category={ elem }
                        key={ elem }
                        />

                    ))
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;

