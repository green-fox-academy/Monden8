'use script';

const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

for (let i = 0; i < kids.length; i++) {
    let list = document.createElement('article');
    let h3owner = document.createElement('h3');
    let ppetname = document.createElement('p');
    let petName = (kids[i].petName);
    let owner = (kids[i].owner)
    h3owner.appendChild(document.createTextNode(owner));
    ppetname.appendChild(document.createTextNode(petName));
    list.appendChild(h3owner);
    list.appendChild(ppetname);
    document.querySelector('div').appendChild(list);
};