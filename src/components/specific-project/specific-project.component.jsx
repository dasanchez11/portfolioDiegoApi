import './specific-project.styles.scss';
import React,{useState,useEffect} from 'react';
import Loader from '../loader/loader.component';
import Button from '../button/button.component';
import AIResult from '../aiResult/aiResult.component'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const SProject = () => {
    const [data,setData] = useState({attributes:[]})
    const [name, setName] = useState("")
    const location = useLocation()
    const {state} = location
    
    const [isLoading, setLoading] = useState(false)
    const [results, setResults] = useState(false)
    const [responseResults, setResponse] = useState("")

    useEffect(()=>{
        const getData = async () =>{
            const fetch = await axios.get(`http://localhost:3001/aiProject/${state}`);
            setData(fetch.data.project);
        };
        getData();
        for (let index = 0; index < data.attributes.length; index++) {
            
            const name = data.attributes[index]
            const value = data.mean_values[index]
            setName(state => ({...state,[name]:value}))
           
        }
        
    },[data,state])    
    
    const onInputChange = (e) =>{
        e.preventDefault();
        setName(state => ({...state,[e.target.name]:e.target.value}))
    }

    const handleClick = async  ()  => {
        setResults(false)
        setLoading(true)
        let fetch_results = ""
        try {
            fetch_results = await axios.post(`http://127.0.0.1:5000/predict_${data.dir}`, {
                data: JSON.stringify(name)
            })
            setResponse(fetch_results.data.prediction)
        } catch (error) {
            console.log(error)
            fetch_results = 'error'
        }
        
        setLoading(false)
        setResults(true)
    }


    const outsideClick = (e) => {
        if (results === true) {
            if (e.target.className.substring(0,8) !== 'aiResult') {
                setResults(false)
                
            }
        } 
       
    }




    return (
        <div className='specific-project' onClick={outsideClick} >
            <h1 className='specific-project__title'>
                {data.title}
                </h1>
            <div className='overview'>
                <div className='overview__info'>
                    < h2 className='overview__description-name'>Description</h2>
                    < p className='overview__description-content'>
                        {data.description}
                    </p>
                </div>
                <img src='https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/01/HeartAnatomy.jpg' alt='' className='overview__image'/>
            </div>
                    <fieldset className="parametersField">
                        <legend className=''>Parameters</legend>
                        { isLoading ? <Loader /> : (
                            <form className='specific-project__params'>
                                    
                                    {data.attributes.map((parameter,idx) => {
                                        
                                        return(
                                            <div className="parameter" key={idx}>
                                                    <div className="parameter__desc">
                                                        <div className="parameter__desc-title">{parameter.toUpperCase()}</div>    
                                                        <input type='field' onChange={onInputChange} name={`${parameter}`} className='parameter__desc-input' placeholder={name[parameter]}></input>
                                                    </div>
                                                    <p className='parameter__text'>{data.attributes_info[idx]}</p>
                                            </div>
                                        )
                                        
                                        
                                    })}
                                    
                        
                            </form>)
                        } 
                        {results ? <AIResult response={responseResults}/> : "" }
                    </fieldset>
                    <Button onClick={handleClick} />
        </div>
    )
}

export default SProject;