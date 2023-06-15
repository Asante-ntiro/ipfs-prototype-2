
import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'http://localhost:5001' }); // Connect to IPFS API endpoint

export const uploadJSONToIPFS = async (data) => {
  try {
    const file = await ipfs.add(JSON.stringify(data));
    return file.cid.toString();
  } catch (error) {
    console.error('Error uploading JSON to IPFS:', error);
    throw error;
  }
};

export const getJSONFromIPFS = async (cid) => {
  try {
    const chunks = [];
    for await (const chunk of ipfs.cat(cid)) {
      chunks.push(chunk);
    }
    const data = JSON.parse(chunks.join(''));
    return data;
  } catch (error) {
    console.error('Error retrieving JSON from IPFS:', error);
    throw error;
  }
};



