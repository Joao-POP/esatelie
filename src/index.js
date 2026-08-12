import APIConfig from "./apiConfig.json" with { type: "json" }

const featuredItems = await fetch(APIConfig.address + APIConfig.featuredItems)
    .then(response => response.text())
    .catch(e => console.log(e));

console.log(featuredItems);