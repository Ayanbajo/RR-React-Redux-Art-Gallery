import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import {clearData, incrementId, decrementId, inputId, fetchData } from './features/dataSlice';
import { useEffect } from 'react';

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  
  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '70vw'}} src={data.apiData.primaryImage} alt={data.apiData.title}  />
    }else{
      return <p>No image found</p>
    }
  }
  useEffect(() => {
    dispatch(fetchData())
  }, [props.objectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => {dispatch(inputId(Number(e.target.value)))}} />
      <div>
        {data.objectID}
        {renderImg()}       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({objectId: state.data.objectId })

export default connect(mapStateToProps)(App)


