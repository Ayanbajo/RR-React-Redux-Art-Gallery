import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {clearData, incrementId, decrementId, inputId, fetchData} from './features/dataSlice'

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector ((state) => state.data)

  const renderImg = () => {
    if (data.apiData) { //if() == true
      console.log(data.apiData.title)
      return <img style={{'width': '80vw'}} src={data.apiData.pimaryImage} alt={data.apiData.title} />
    } else{
      return <p>No Image Found</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {dispatch(clearData())}}>Clear</button>
        <button onClick={() => {dispatch(incrementId())}}>Next</button>
        <button onClick={() => {dispatch(decrementId())}}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => { dispatch(inputId(Number(e.target.value))) }} />
      <div>
        {data.objectId}
        {renderImg}
      </div>
    </div>
  );
}

export default App;