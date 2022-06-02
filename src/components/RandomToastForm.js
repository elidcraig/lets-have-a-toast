import React, { useState } from 'react';

function RandomToastForm() {
  const [tastePreference, setTastePreference] = useState(true);

  return (
    <div className='tastePreferenceSelector'>
      {tastePreference ? (
        <button onClick={(e) => setTastePreference(!tastePreference)}>
          Sweet
        </button>
      ) : (
        <button onClick={(e) => setTastePreference(!tastePreference)}>
          Savory
        </button>
      )}
    </div>
  );
}

export default RandomToastForm;
