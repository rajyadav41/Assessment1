let totalNFTs = 0;
function mintNFT(name, description, imageUrl) {
    let newNFT = {
        name: name,
        description: description,
        imageUrl: imageUrl
    };
    totalNFTs++;
    return newNFT;
}
function listNFTs(nftArray) {
    nftArray.forEach(function(nft) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image URL: " + nft.imageUrl);
        console.log("-------------------------");
    });
}
function getTotalSupply() {
    console.log("Total number of NFTs: " + totalNFTs);
}
let myNFTs = [];
myNFTs.push(mintNFT("NFT 1", "Description of NFT 1", "https://rajyadav1x.com/nft1.jpg"));
myNFTs.push(mintNFT("NFT 2", "Description of NFT 2", "https://rajyadav1x.com/nft2.jpg"));
myNFTs.push(mintNFT("NFT 3", "Description of NFT 3", "https://rajyadav1x.com/nft3.jpg"));
listNFTs(myNFTs);
getTotalSupply();
