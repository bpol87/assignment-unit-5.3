console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let zoneAlbum = [];
let riseAlbum = [];
let ChAlbum = [];
let heavenAlbum = [];
let feverAlbum = [];
let radAlbum = [];
let myCollection = [];

function createAlbum(album, name, duration) {
  album.push(
    {
      name: name,
      duration: duration,
    }
  )
  return album[album.length - 1];
}

createAlbum(feverAlbum, "More, More, More", "4:40");
createAlbum(feverAlbum, "Love at First Sight", "3:57");
createAlbum(feverAlbum, "Can't Get You Out of My Head", "3:49");
createAlbum(feverAlbum, "Fever", "3:30");
createAlbum(feverAlbum, "Give It to Me", "2:48");
createAlbum(feverAlbum, "Fragile", "3:44");
createAlbum(feverAlbum, "Come Into My World", "4:30");
createAlbum(feverAlbum, "In Your Eyes", "3:18");
createAlbum(feverAlbum, "Dancefloor", "3:23");
createAlbum(feverAlbum, "Love Affair", "3:47");
createAlbum(feverAlbum, "Your Love", "3:47");
createAlbum(feverAlbum, "Burning Up", "3:59");

createAlbum(riseAlbum, "Femininomenon", "3:39");
createAlbum(riseAlbum, "Red Wine Supernova", "3:12");
createAlbum(riseAlbum, "After Midnight", "3:24");
createAlbum(riseAlbum, "Coffee", "3:25");
createAlbum(riseAlbum, "Casual", "3:52");
createAlbum(riseAlbum, "Super Graphic Ultra Modern Girl", "3:03");
createAlbum(riseAlbum, "Hot To Go!", "3:04");
createAlbum(riseAlbum, "My Kink is Karma", "3:42");
createAlbum(riseAlbum, "Picture You", "3:07");
createAlbum(riseAlbum, "Kaleidoscope", "3:42");
createAlbum(riseAlbum, "Pink Pony Club", "4:18");
createAlbum(riseAlbum, "Naked in Manhattan", "3:31");
createAlbum(riseAlbum, "California", "3:18");
createAlbum(riseAlbum, "Guilty Pleasure", "3:44");

createAlbum(ChAlbum, "Genie in a Bottle", "3:36");
createAlbum(ChAlbum, "What a Girl Wants", "3:52");
createAlbum(ChAlbum, "I Turn to You", "4:33");
createAlbum(ChAlbum, "So Emotional", "4:00");
createAlbum(ChAlbum, "Come On Over (All I Want Is You)", "3:09");
createAlbum(ChAlbum, "Reflection", "3:33");
createAlbum(ChAlbum, "Love for All Seasons", "3:59");
createAlbum(ChAlbum, "Somebody's Somebody", "5:02");
createAlbum(ChAlbum, "When You Put Your Hands On Me", "3:35");
createAlbum(ChAlbum, "Blessed", "3:05");
createAlbum(ChAlbum, "Love Will Find A Way", "3:55");
createAlbum(ChAlbum, "Obvious", "4:00");

createAlbum(heavenAlbum, "Heaven", "1:46");
createAlbum(heavenAlbum, "Kings & Queens", "2:42");
createAlbum(heavenAlbum, "Naked", "3:42");
createAlbum(heavenAlbum, "Tattoo", "2:39");
createAlbum(heavenAlbum, "OMG What's Happening", "2:59");
createAlbum(heavenAlbum, "Call Me Tonight", "2:50");
createAlbum(heavenAlbum, "Born to the Night", "3:19");
createAlbum(heavenAlbum, "Torn", "3:18");
createAlbum(heavenAlbum, "Take You to Hell", "2:44");
createAlbum(heavenAlbum, "Who's Laughing Now", "3:00");
createAlbum(heavenAlbum, "Belladonna", "3:23");
createAlbum(heavenAlbum, "Rumors", "3:12");
createAlbum(heavenAlbum, "So Am I", "3:04");
createAlbum(heavenAlbum, "Salt", "3:00");
createAlbum(heavenAlbum, "Sweet But Psycho", "3:07");

createAlbum(zoneAlbum, "Me Against the Music (feat. Nadonna)", "3:43");
createAlbum(zoneAlbum, "(I Got That) Boom Boom (feat. Ying Yang Twins)", "4:51");
createAlbum(zoneAlbum, "Showdown", "3:18");
createAlbum(zoneAlbum, "Breathe on Me", "3:43");
createAlbum(zoneAlbum, "Early Mornin", "3:45");
createAlbum(zoneAlbum, "Toxic", "3:21");
createAlbum(zoneAlbum, "Outrageous", "3:22");
createAlbum(zoneAlbum, "Touch of My Hand", "4:19");
createAlbum(zoneAlbum, "The Hook Up", "3:54");
createAlbum(zoneAlbum, "Shadow", "3:45");
createAlbum(zoneAlbum, "Brave New Girl", "3:30");
createAlbum(zoneAlbum, "Everytime", "3:53");

createAlbum(radAlbum, "End of an Era", "3:16");
createAlbum(radAlbum, "Houdini", "3:06");
createAlbum(radAlbum, "Training Season", "3:29");
createAlbum(radAlbum, "These Walls", "3:38");
createAlbum(radAlbum, "Whatcha Doing", "3:18");
createAlbum(radAlbum, "French Exit", "3:21");
createAlbum(radAlbum, "Illusion", "3:08");
createAlbum(radAlbum, "Falling Forever", "3:43");
createAlbum(radAlbum, "Anything For Love", "2:22");
createAlbum(radAlbum, "Maria", "3:08");
createAlbum(radAlbum, "Happy for You", "4:06");

function addToCollection(collection, title, artist, yearPublished, tracks) {

  collection.push(
  {title: title,
  artist: artist,
  yearPublished: yearPublished,
  tracks: tracks,
  })
  
  return collection[collection.length - 1];
  }

addToCollection(myCollection, "In The Zone", "Britney Spears", 2003, zoneAlbum);
addToCollection(myCollection, "The Rise and Fall of A Midwest Princess", "Chappell Roan", 2023, riseAlbum);
addToCollection(myCollection, "Christina Aguilera", "Christina Aguilera", 1999, ChAlbum);
addToCollection(myCollection, "Radical Optimism", "Dua Lipa", 2024, radAlbum);
addToCollection(myCollection, "Heaven & Hell", "Ava Max", 2020, heavenAlbum);
addToCollection(myCollection, "Fever", "Kylie Minogue", 2001, feverAlbum);

function showCollection(collection) {
 for (const element of collection) {
  console.log(`${element.title} by ${element.artist}, published in ${element.yearPublished}`)
  for (let i = 0; i < element.tracks.length; i++) {
    console.log(`${i+1}: ${element.tracks[i].name}: ${element.tracks[i].duration}`)
  }
 }
};

function findByArtist(collection, artist) {
  let filteredCollection = [];
  for (const element of collection) {
    if (element.artist === artist) {
filteredCollection.push(element);
    }
  }
return filteredCollection;
}

function search (collection, searchCriteria) {
  let filteredCollection = [];
  if (searchCriteria === undefined) {
    return collection;
  } else if (searchCriteria.trackName) {
    for (const element of collection) {
      for (let i = 0; i < element.tracks.length; i++) {
      if (searchCriteria.trackName === element.tracks[i].name) {
        filteredCollection.push(element);
      }}
    } } else {
    if(searchCriteria.artist === undefined || searchCriteria.artist === `` || Object.keys(searchCriteria) === 0){
      return collection}
    if(searchCriteria.yearPublished === undefined || searchCriteria.yearPublished === `` || Object.keys(searchCriteria) === 0){
      return collection
    }
  for (const element of collection) {
  if (searchCriteria.artist === element.artist &&  searchCriteria.yearPublished === element.yearPublished) {
    filteredCollection.push(element);
    
  }}
  
}
return filteredCollection;
}

console.log(search(myCollection, {trackName: "French Exit"}))


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
