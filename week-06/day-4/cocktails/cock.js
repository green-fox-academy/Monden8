const express = require('express');
const app = express();
const PORT = 3000;
const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];
const alcoholList = ['all','gin', 'vodka', 'rum', 'tequila'];

toUpper = function(x){ 
    return x.toUpperCase();
};
let alcoholListiii = alcoholList.map(toUpper);

/*filter = function(x,y){
    for (let i = 0; i < y.length; i++) {
        if(x[i].contains.map.has(y)){
            x.splice(i,1)
        }return x
    }
}
filter(cocktails,alcoholList)*/
  app.use(express.static(__dirname+ '/static'));
  
  app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Cocktails',
        alcoholLista: alcoholListiii,
        lista: cocktails
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});