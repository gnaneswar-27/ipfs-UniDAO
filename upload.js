const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "32IzheTNcWLA28QVdKgU4cIiB1xeuariJlYnSUj84swH65l27U0ZBsMC4N1UdtWH",
    });

    const uploadArray = [
        {
            path: "dunkirk.jpg",
            content: fs.readFileSync('./dunkirk.jpg', {encoding: 'base64'})
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });

    console.log(response.result)
}

uploadToIpfs();