import { useState } from 'react'
import '../styles/rollcall.css'

const RollCall = ({banList, setBanList, histList, setHistList}) => {
    /*Avilable parameters for filtering: name, gender(female,male. genderless. or unkown),
    status (alive, dead, or unkown), species, type 

    create a ban list when an attribute is clicked add the word to an array
     */   
    const [id, setId] = useState(1);
    const  [name, setName] = useState('');
    const  [status, setStatus] = useState('');
    const  [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [imageUrl, setImageUrl] = useState('');
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
        setHistList([...histList, name])
        let randomId = getRandomNumber();
        let temp = [];

        if ((banList.includes(gender)) || (banList.includes(species)) ||  (banList.includes(status))){
            randomId = getRandomNumber();
            fetchRollCall(randomId);
        }
        fetchRollCall(randomId);
    }

    const handleGenderBanClick = () => {
        if (!banList.includes(gender)) {
            setBanList([...banList, gender]);
        }
    }
    
    const handleSpeciesBanClick = () => {
        if (!banList.includes(species)) {
            setBanList([...banList, species]);
        }
    }

    const handleStatusBanClick = () => {
        if (!banList.includes(status)){
            setBanList([...banList, status]);
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
            <button className='rollCallButton' onClick={handleGenderBanClick}>Gender: {gender}</button>
            <button className='rollCallButton' onClick={handleSpeciesBanClick}>Species: {species}</button>
            <button className='rollCallButton' onClick={handleStatusBanClick}>Status: {status}</button>
            <div className='kanyeQuote'>
                <h2>Kanye quote: </h2>
                <h3>{quote}</h3>
            </div>
            <br></br>
            <button className='rollCallButton' onClick={handleButtonClick}>Discover More!</button>
        </div>
    )
}

export default RollCall;