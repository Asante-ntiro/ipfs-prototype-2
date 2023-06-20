import { useState } from 'react';
import { uploadJSONToIPFS, getJSONFromIPFS } from '../utils/ipfs';

export default function Home() {
  const [name, setName] = useState('');
  const [plasticCollected, setPlasticCollected] = useState('');
  const [location, setLocation] = useState('');
  const [cid, setCID] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      plasticCollected,
      location,
    };

    const cid = await uploadJSONToIPFS(data);
    setCID(cid);
  };

  const handleRetrieve = async () => {
    const retrievedData = await getJSONFromIPFS(cid);
    console.log('Retrieved data:', retrievedData);
  };

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>

      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">IPFS Data Storage</h1>
          <form onSubmit={handleFormSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="plasticCollected" className="block font-semibold mb-2">Plastic Collected:</label>
              <input
                type="text"
                id="plasticCollected"
                value={plasticCollected}
                onChange={(e) => setPlasticCollected(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block font-semibold mb-2">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload to IPFS</button>
          </form>

          <div className="mb-4">
            <input
              type="text"
              value={cid}
              onChange={(e) => setCID(e.target.value)}
              placeholder="Enter CID"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <button onClick={handleRetrieve} className="bg-blue-500 text-white px-4 py-2 rounded-md">Retrieve from IPFS</button>
        </div>
      </div>
    </>
  );
}
