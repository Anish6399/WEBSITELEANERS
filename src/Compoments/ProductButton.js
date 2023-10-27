import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ProductButton = () => {
    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)
    const [data, setData] = useState([])
    const [showFullDescription, setShowFullDescription] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const responseJson = await fetch('https://fakestoreapi.com/products')
                const responseData = await responseJson.json()
                setShowFullDescription(new Array(responseData.length).fill(false))
                setData(responseData)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const handleClick = () => {
        setState(!state)

    }

    const handleClick1 = () => {
        setState1(!state1)

    }

    
    const handleClick2 = () => {
        setState2(!state2)

    }

    const toggleDescription = (index) => {
        const UpdatedDes = [...showFullDescription]
        UpdatedDes[index] = !UpdatedDes[index]
        setShowFullDescription(UpdatedDes);
    };



    return (
        <>

            <div className='product' onClick={handleClick}>


                <div style={{ paddingLeft: '3em', color: 'white' }}>
                    Step1: Niche Product
                </div>

                <div style={{ paddingRight: '3em' }} >
                    {state ? <FontAwesomeIcon icon={faAngleUp} color='white' /> : <FontAwesomeIcon icon={faAngleDown} color='white' />}
                </div>
            </div>

            {state && (<div className='maincardContainer'>
                <div className='babyProduct'>Baby Products</div>

                <div className='cardContainer'>

                    {data.map((items, index) => {
                        return (
                            <div className='card'>
                                <img
                                    src={items?.image}
                                    style={{ height: '200px', width: '300px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
                                />

                                <div style={{ padding: '20px' }}>
                                    <h2>Baby Product</h2>
                                    <div>
                                        <span>
                                            {showFullDescription[index]
                                                ? items.description
                                                : items.description.slice(0, 100) + (showFullDescription ? '' : '...')}
                                        </span>
                                        <span style={{ fontSize: '18px', lineHeight: '16px', fontWeight: '600' }} onClick={() => { toggleDescription(index) }}>
                                            {showFullDescription[index] ? 'See Less' : 'See More'}
                                        </span>
                                    </div>

                                </div>


                            </div>
                        )
                    })}

                </div>

                <div className='kitchenTools'>Kitchen tools</div>

                <div className='cardContainer'>
                    <div className='card'>img and description</div>
                    <div className='card'>img and description</div>
                    <div className='card'>img and description</div>
                </div>

            </div>)}


            <div className='product1'>


                <div style={{ paddingLeft: '3em', color: 'white' }}>
                    Step2: Get Hostin & Domine
                </div>

                <div style={{ paddingRight: '3em' }} >
                    {state ? <FontAwesomeIcon icon={faAngleUp} color='white' /> : <FontAwesomeIcon icon={faAngleDown} color='white' />}
                </div>
            </div>

            <div className='product1' onClick={handleClick1}>

                <div style={{ paddingLeft: '3em', color: 'white' }}>
                    Step3: Keyword Tools
                </div>

                <div style={{ paddingRight: '3em' }} >
                    {state1 ? <FontAwesomeIcon icon={faAngleUp} color='white' /> : <FontAwesomeIcon icon={faAngleDown} color='white' />}
                </div>

            </div>

            {state1 && (
                <div className='maincardContainer1'>

                    <p className="no-margin-padding" style={{ color: '#000000', fontSize: '18px', lineHeight: '16px', fontWeight: '700' }}>Tools to find Keywords</p>

                    <div className='btngroup1'>

                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <div className='btn1'>
                            <span>#1 Tool</span>
                        </div>

                        <div className='btn'>
                            <span style={{ fontSize: '14px',marginLeft: '16px' }}>Keyword.io</span>
                        </div>
                        </div>
                       

                    </div> 

                    <div className='btngroup1'>

                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <div className='btn3'>
                            <span>#2 Tool</span>
                        </div>

                        <div className='btn2'>
                            <span style={{ marginLeft: '10px', fontSize: '14px' }}>Keyword Sheeter</span>
                        </div>
                        </div>
                       

                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:'4em'}}>
                        <div className='btn3'>
                            <span>#3 Tool</span>
                        </div>

                        <div className='btn2'>
                            <span style={{ marginLeft: '10px', fontSize: '14px' }}>Keyword Sheeter</span>
                        </div>
                        </div>

                       

                    </div>

                </div>
            )}


<div className='product1' onClick={handleClick2}>

<div style={{ paddingLeft: '3em', color: 'white' }}>
    Step4: Find Number of Searches
</div>

<div style={{ paddingRight: '3em' }} >
    {state2 ? <FontAwesomeIcon icon={faAngleUp} color='white' /> : <FontAwesomeIcon icon={faAngleDown} color='white' />}
</div>

</div>

{state2 && (
<div className='maincardContainer1'>

    <p className="no-margin-padding" style={{ color: '#000000', fontSize: '18px', lineHeight: '16px', fontWeight: '700' }}>Tools to find Keywords</p>

    <div className='btngroup1'>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <div className='btn1'>
            <span>#1 Tool</span>
        </div>

        <div className='btn'>
            <span style={{ fontSize: '14px',marginLeft: '16px' }}>Semscoop</span>
        </div>
        </div>
       

    </div> 

    <div className='btngroup1'>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <div className='btn3'>
            <span>#2 Tool</span>
        </div>

        <div className='btn2'>
            <span style={{marginRight:'2em', fontSize: '14px' }}>LinkGraph</span>
        </div>
        </div>
       

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:'4em'}}>
        <div className='btn3'>
            <span>#3 Tool</span>
        </div>

        <div className='btn2'>
            <span style={{ marginLeft: '10px', fontSize: '14px' }}>SearchVolume.io</span>
        </div>
        </div>

       

    </div>

</div>
)}

        </>
    )
}

export default ProductButton