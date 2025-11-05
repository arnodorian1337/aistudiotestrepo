
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-gray-900">
      <iframe
        src="https://example.com"
        title="Example Website"
        className="w-full h-full border-none"
        sandbox="" // Added for basic security, can be configured further if needed
      />
    </main>
  );
};

export default App;
