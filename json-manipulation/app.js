const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'data.json'), { encoding: 'utf8' });
const mappableData = JSON.parse(data);

// check data
console.log(mappableData);

// 1. Find items in the Meeting Room.
function getItemsByRoom(data, roomName) {
    return data.filter(inv => inv.placement.name === roomName);
}

// console.log( getItemsByRoom(mappableData, 'Meeting Room') );


// 2. Find all electronic devices.
function getItemsByType(data, type) {
    return data.filter(inv => inv.type === type);
}

// console.log( getItemsByType(mappableData, 'electronic') );


// 3. Find all the furniture.
// console.log( getItemsByType(mappableData, 'furniture') );


// 4. Find all items were purchased on 16 Januari 2020.
function getItemsByPurchasedAt(data, date) {
    const temp = data.map(inv => ( { ...inv, purchased_at: new Date(inv.purchased_at).toLocaleDateString() } ));
    return temp;
}

// console.log( getItemsByPurchasedAt(mappableData, '16 Januari 2020') ); <=======FIXXXXXXXX


// 5. Find all items with brown color.
function getItemsByTag(data, tag) {
    return data.filter( inv => inv.tags.some(a => a === tag) )
}

// console.log( getItemsByTag(mappableData, 'brown') );