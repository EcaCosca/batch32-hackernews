import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  const [input, setInput] = useState('')

  useEffect(()=>{
    axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then((res)=>{setData(res.data.hits)})
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  
  const getResults = () => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${input}&tags=story`)
    .then((res)=>{setData(res.data.hits)})
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'>
          <img src={logo} className="App-logo" style={{height:"50px"}}/>
          <div className='nav'>
            <input onChange={handleChange}></input>
            <button className="rainbow rainbow-1" onClick={getResults}>Search</button>
          </div>
        </div>

        {
          data ? 
          data.map(hit =>
            <div className="card">
              <h5>{hit.title} by <em>{hit.author}</em></h5>
              <p>{hit.url}</p>
            </div>
          )
          : 
          <div>
            <img src={logo} className="App-logo" />
            <p>Loading</p>
          </div>
        }
        
      </header>
    </div>
  );
}

export default App;

// author
// : 
// "godelmachine"
// comment_text
// : 
// null
// created_at
// : 
// "2022-10-28T05:48:16.000Z"
// created_at_i
// : 
// 1666936096
// num_comments
// : 
// 284
// objectID
// : 
// "33368104"
// parent_id
// : 
// null
// points
// : 
// 355
// story_id
// : 
// null
// story_text
// : 
// null
// story_title
// : 
// null
// story_url
// : 
// null
// title
// : 
// "I tried starting a manufacturing unit in India (2020)"
// url
// : 
// "https://superr.in/economy/i-tried-starting-a-manufacturing-unit-in-india/"
// _highlightResult
// : 
// {title: {…}, url: {…}, author: {…}}
// _tags
// : 
// (4) ['story', 'author_godelmachine', 'story_33368104', 'front_page']
// [[Prototype]]
// : 
// Object
