const functions = require("firebase-functions");
const newItems = require("./data/newItems.json");
const authors = require("./data/authors.json");
const explore = require("./data/explore.json");
const hotCollections = require("./data/hotCollections.json");
const topSellers = require("./data/topSellers.json");
const itemDetails = require("./data/itemDetails.json");

exports.authors = functions.https.onRequest((data, context) => {
  const authorId = data.query.author;
  const author = authors.find((item) => +item.authorId === +authorId);
  context.send(author);
});

exports.newItems = functions.https.onRequest((_, context) => {
  context.send(newItems);
});

exports.explore = functions.https.onRequest((data, context) => {
  const filterOption = data.query.filter;
  if (filterOption) {
    if (filterOption === "price_high_to_low") {
      const filteredItems = explore.slice().sort((a, b) => b.price - a.price);
      context.send(filteredItems);
    } else if (filterOption === "price_low_to_high") {
      const filteredItems = explore.slice().sort((a, b) => a.price - b.price);
      context.send(filteredItems);
    } else if (filterOption === "likes_high_to_low") {
      const filteredItems = explore.slice().sort((a, b) => b.likes - a.likes);
      context.send(filteredItems);
    }
  } else {
    context.send(explore);
  }
});

exports.hotCollections = functions.https.onRequest((_, context) => {
  context.send(hotCollections);
});

exports.topSellers = functions.https.onRequest((_, context) => {
  context.send(topSellers);
});

exports.itemDetails = functions.https.onRequest((data, context) => {
  const nftId = data.query.nftId;
  const nftItem = itemDetails.find((item) => +item.nftId === +nftId);
  context.send(nftItem);
});
