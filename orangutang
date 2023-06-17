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
    <div>
      <h1>IPFS Data Storage</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="plasticCollected">Plastic Collected:</label>
        <input
          type="text"
          id="plasticCollected"
          value={plasticCollected}
          onChange={(e) => setPlasticCollected(e.target.value)}
        />
        <br />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />

        <button type="submit">Upload to IPFS</button>
      </form>
      <br />

      <input
        type="text"
        value={cid}
        onChange={(e) => setCID(e.target.value)}
        placeholder="Enter CID"
      />
      <button onClick={handleRetrieve}>Retrieve from IPFS</button>
    </div>
  );
}

