//IMPORTS
import { useEffect, useState } from "react"
//Componentes - Función
import { getProductById } from "../../productos"
import ItemDetail from "../ItemDetail/ItemDetail"
//React-Router-DOM
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setProduct(res)
            }
            )
    }, [id])

    console.log("Product:", product)

    const styles = {
        div:{
            paddingTop: 130
        }
    }

    return (
        <div className='ItemDetail-Container' style={styles.div}>
            <h2> DETALLE DEL PRODUCTO </h2>
            <hr />
            <div key={product.id}>
                <Link to={`/item/${product.id}`}>
                    <ItemDetail {...product} />
                </Link>
            </div>
        </div>
    )
}

export default ItemDetailContainer;