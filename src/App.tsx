import React, { useState } from 'react';
import { Drawing } from './drawings/Drawing';

type SketchType = 'basic' | '2' | '3' | '4' | '5' | '6';

function App() {
  const [selectedSketch, setSelectedSketch] = useState<SketchType>('basic');

  const sketchOptions = [
    { value: 'basic' as SketchType, label: 'Rectangles Colorés' },
    { value: '2' as SketchType, label: 'Lignes Interactives' },
    { value: '3' as SketchType, label: 'Coloriage multicolor' },
    { value: '4' as SketchType, label: 'Miroir miroir' },
    { value: '5' as SketchType, label: 'Spider legs' },
    { value: '6' as SketchType, label: 'Unlabeled' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mes petits jouets</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Choisissez un dessin :</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {sketchOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSketch(option.value)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: selectedSketch === option.value ? '#61dafb' : '#282c34',
                  color: selectedSketch === option.value ? '#282c34' : 'white',
                  border: '2px solid #61dafb',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Drawing sketchType={selectedSketch} />
        </div>
      </header>
    </div>
  );
}

export default App;
