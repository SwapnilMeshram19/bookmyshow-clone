import React from 'react'
import styles from "../Styling/Food.module.css";
import {data} from "./FoodData";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 100vh;
	overflow-y: scroll;
	padding-top: 20px;
`

const Container = styled.div`
    width: 100%;
	margin: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
    img {
        width: 90%;
    };

    .wrapper {
        width: 100%;
        margin: 20px 0;
        border: 1px solid #cecece;
        text-align: center;
        background: white;
        padding: 10px;
    };
    .wrapper > div:first-child {
        font-family: Montserrat;
        line-height: 30px;
        letter-spacing: 3px;
        font-size: 25px;
        margin-bottom: 10px;
    };
    .span {
        display: block;
        font-size: 14px;
        color: #666;
        font-family: Roboto, sans-serif;
    };
    .filters {
        margin: 20px;
    }
    .filters span {
        font-size: 10px;
        border: 1px solid #dfe3e7;
        border-radius: 12px;
        padding: 4px 12px;
        color: #666;
        margin-right: 15px;
        cursor: pointer;
        text-align: center;
    }
`

const init = {
    all: true,
    combo: false,
    snacks: false,
    beverages: false,
    popcorn: false,
}

const FoodCard = () => {

    const [active, setActive] = React.useState(init);
    const [filteredFood, setFliteredFood] = React.useState([])
    const [selectedFood, setSelectedFood]= React.useState([])

    let count = 0;

    React.useEffect(() => {
        setFliteredFood(data)
        handleFilter("All")
    }, [])

    React.useEffect(() => {
        setFliteredFood(data)
    }, [data])

    const handleFilter = (text) => {
        if (text === "CO") {
            const updated = data.filter(item => item.is_combo === true)
            setFliteredFood(updated)
            setActive({...active, combo: true, all:false, snacks:false, beverages:false, popcorn:false})
        }else if (text === "SN") {
            const updated = data.filter(item => item.is_coke === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:true, beverages:false, popcorn:false})
        }else if (text === "BE") {
            const updated = data.filter(item => item.is_combo === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:false, beverages:true, popcorn:false})
        }
        else if (text === "PO") {
            const updated = data.filter(item => item.is_popcorn === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:false, beverages:false, popcorn:true})
        } else {
            setFliteredFood(data)
            setActive({...active, combo: false, all:true, snacks:false, beverages:false, popcorn:false})
        }
    }

    const handleCount = (id, val) => {
        if (selectedFood.length < 5) {
            let selected = filteredFood.map(item => item._id === id?{...item, count: item.count + val}: item)
            setFliteredFood(selected)
        } else {
            alert("Only 5 items per user")
        }
    }
    return (

        <Container>
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1647847591185_728x100.jpg" alt="banner"/>
            <div className="wrapper">
                <div>Grab a <a href="">bite!</a></div>
                <span className="span">Prebook Your Meal and<span> Save More!</span></span>
                <div className="filters">
                    <span style={active.all ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('ALL')}>ALL</span>
                    <span style={active.combo ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('CO')}>COMBOS</span>
                    <span style={active.snacks ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('SN')}>SNACKS</span>
                    <span style={active.beverages ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('BE')}>BEVERAGES</span>
                    <span style={active.popcorn ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={() =>handleFilter('PO')}>POPCORN</span>
                </div>
                <Div>

                {
                    data.map((item)=> (
                        <div className={styles.card} key={item._id}>
                            <div className={styles.price}>
                                <i class="fas fa-rupee-sign"></i>
                                <div>{item.food_price}</div>
                            </div>

                            <img src={item.food_image} alt="" />
                            
                            <div className={styles.details}>
                                <div className={styles.title}>
                                    <div>{ item.food_name }</div>
                                    <div>{ item.food_tag }</div>
                                </div>

                                <div className={styles.btn}>
                                    <div>
                                        <div className={styles.veg}>
                                            <i class="fas fa-circle"></i>
                                        </div>
                                    </div>
                                    <div>
                                        {count === 0 ? <span onClick={() => handleCount(item._id, +1)}>ADD</span> :
                                            <div className={styles.counter}>
                                                <div onClick={() => handleCount(item._id, -1)}>
                                                <i class="fas fa-minus-circle"></i>
                                                </div>
                                                <div>{ count }</div>
                                                <div onClick={()=>handleCount(item._id, +1)}><i class="fas fa-plus-circle"></i></div>
                                        </div> }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    
                </Div>
            </div>
            
        </Container>
        
    )
}

export default FoodCard
