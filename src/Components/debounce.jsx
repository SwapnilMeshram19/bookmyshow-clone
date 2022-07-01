import React from 'react'
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Debounce = () => {
    const [item, setItems] = React.useState([])
    const [copyitem, setCopyItems] = React.useState([])
  
    React.useEffect(() => {
        getData()
    }, [])
    //.
    const getData = debounce((name) => {
        // https://datajsonaaaasd.herokuapp.com/posts?title=${name}
        fetch(`http://www.omdbapi.com/?apikey=5ce07a9f&s=${name}`)
            .then((res) => res.json())
            .then((res) => {

                // setItems(res.Search);
                setCopyItems(res.Search);
                console.log(res.Search)

            }).catch((err) => {
                console.log(err)
            })
    },1000)



    return (

        <>

            <div className='container'>
                <div className='product'>
            <input type="text" name="" id="movie" placeholder='movie name' onChange={(e) => getData(e.target.value)} />
                    <div >
                        {
                            copyitem?.map(post => {
                                return (
                                    <div>
                                            <p>{post.Title} </p>
                                            <hr />
                                        </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export { Debounce }
