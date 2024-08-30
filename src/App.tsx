import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';
import TrianglePolygon from './assets/icons/triangle.svg';
import CirclePolygon from './assets/icons/circle.svg';
import RecPolygon from './assets/icons/rectangle.svg';
import { Popup } from './components/popup';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const addPolygon = () => {
    if (currentIndex < 10) {
      const newIndex = currentIndex + 1;
      const newSequence = [...sequence, fibonacci(newIndex)];

      if (newIndex === 10) {
        setShowPopup(true);
      } else {
        setSequence(newSequence);
        setCurrentIndex(newIndex);
      }
    }
  };

  const removePolygon = () => {
    if (currentIndex > 0) {
      const newSequence = [...sequence];
      newSequence.pop();
      setSequence(newSequence);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartGame = () => {
    setSequence([]);
    setCurrentIndex(0);
    setShowPopup(false);
  };

  const renderPolygons = (index: number, value: number) => {
    const polygonType = index % 3;
    const polygons = [];
    console.log('value', index);

    for (let i = 0; i < value; i++) {
      switch (polygonType) {
        case 0:
          polygons.push(
            <img
              key={`rec-${i}`}
              src={RecPolygon}
              alt="Rectangle"
              className="polygon"
            />
          );
          break;
        case 1:
          polygons.push(
            <img
              key={`circle-${i}`}
              src={CirclePolygon}
              alt="Circle"
              className="polygon"
            />
          );
          break;
        case 2:
          polygons.push(
            <img
              key={`triangle-${i}`}
              src={TrianglePolygon}
              alt="Triangle"
              className="polygon"
            />
          );
          break;
        default:
          break;
      }
    }
    return polygons;
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className='action-container flex-between-center'>
          <div className='flex-start-center'>
            <p className='f-24 w-500'>Current Index</p>
            <p className='f-30 w-700 ml-5'>{currentIndex}</p>
          </div>
          <div className='flex-end-center'>
            <Button type={'primary'} label={'Add'} onClick={addPolygon} />
            <Button type={'primary'} label={'Remove'} onClick={removePolygon} />
            <Button type={'secondary'} label={'Restart'} onClick={restartGame} />
          </div>
        </div>
        <div className='polygon-container'>
          {sequence.map((value, index) => (
            <div key={index} className="polygon-row">
              <p className="f-32 w-600">{value}</p>
              <div className="polygon-shapes">{renderPolygons(index, value)}</div>
            </div>
          ))}
        </div>
        {showPopup && <Popup onClose={restartGame} />}
      </div>
    </div>
  );
}

export default App;
