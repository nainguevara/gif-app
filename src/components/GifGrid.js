
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";




const GifGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs( category );

    return (
        <>
        <h3>{ category }</h3>

        <p>{ loading ? "Cargando..." : "Data cargada" }</p>

        <div className="card-grid">
                {
                    images?.map( img => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
        </div>
        </>
    )
}

export default GifGrid
