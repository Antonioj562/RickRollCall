import { useState } from 'react'
import '../styles/rollcall.css'

const RollCall = (props) => {
    /*Avilable parameters for filtering: name, gender(female,male. genderless. or unkown),
    status (alive, dead, or unkown), species, type 
     */   
    const [id, setId] = useState(1);
    const  [name, setName] = useState('');
    const  [status, setStatus] = useState('');
    const  [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [travelPhrases, setTravelPhrases] = useState([]);
    const [quote, setQuote] = useState('');


    const fetchRollCall = (id) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            setName(data.name);
            setStatus(data.status);
            setGender(data.gender);
            setSpecies(data.species);
            setImageUrl(data.image);
        })
        .catch(error => console.error('Error fetching Roll Call quote:', error));
    };

    const fetchQuote = () => {
        fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => setQuote(data.quote))
        .catch(error => console.error('Error fetching Kanye quote:', error));
    };

    const handleButtonClick = () => {
        fetchQuote();

        if (id in props.hist){
            fetchRollCall(id);
        } else {
            setId(getRandomNumber);
            fetchRollCall(id);
        }
    }

    function getRandomNumber() { 
        const randomNumber = Math.floor( Math.random() * (826-1) ) + 1; 
        return randomNumber; 
    }

    return (
        <div className='rollCallContainer'>
            <br></br>
            <img src={imageUrl} className='rollCallImage'></img>
            <br></br>
            <h2>Name: {name}</h2>
            <h3>Gender: {gender}</h3>
            <h3>Species: {species}</h3>
            <div className='kanyeQuote'>
                <h2>Kanye quote: </h2>
                <h3>{quote}</h3>
            </div>
            <br></br>
            <button onClick={handleButtonClick}>Discover More!</button>
        </div>
    )
}

export default RollCall;