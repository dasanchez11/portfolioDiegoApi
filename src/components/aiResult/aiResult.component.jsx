import './aiResult.styles.scss';
import React, {useState, useEffect} from 'react';



const AIResult = ({response}) => {
    const[load,setLoad] = useState(true)

    useEffect(()=> {
        setLoad(false)
    },[])


    return (
        <div className={`aiResult ${load ? "" : "aiResult__active"}` }>
            <h3 className='aiResult__title'>Has Heart Disease?</h3>
            <p className='aiResult__prediction'>{response}</p>
            {/* <p className='aiResult__metric'>Metric: <span className='aiResult__metric-text'>Accuracy</span></p>
            <p className='aiResult__modelAccuracy'>Model Accuracy: <span className='aiResult__modelAccuracy-text'>80%</span></p>
            <p className='aiResult__prediction'>Prediction: <span className='aiResult__prediction-text'>90% probability of heart disease</span></p> */}
        </div>
    )
};

export default AIResult;