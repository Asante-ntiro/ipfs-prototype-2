This is a Next.js app that allows users to store their data as a JSON object on IPFS (InterPlanetary File System).

## Features

- Input form for users to enter their name, amount of plastic collected, and location.
- Uploads user data as a JSON object to IPFS.
- Retrieves and displays user data using the CID (Content Identifier) provided by IPFS.

## Prerequisites

- Node.js (v14 or above)
- IPFS daemon running locally (Make sure to start the IPFS daemon with `ipfs daemon`)

## Getting Started

1. Clone the repository:
2. Install dependencies
	```bash
	npm install
	```

3. Run IPFS daemon on port:5001
	```bash
	ipfs daemon
	```
4. Make sure that your IPFS daemon's configuration file ( that you can find at "~/.ipfs/config" on your machine allows CORS requests from the NextJS app's domain.

You can do this by adding the following lines to the "API" section of the config file:
	```json
	"API": {
  	"HTTPHeaders": {
	    "Access-Control-Allow-Origin": ["http://localhost:3000"]
	  }
	}
	```
5. Start the development server:
	```bash
	npm run dev
	```
