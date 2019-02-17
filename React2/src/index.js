import React from 'react';
import ReactDOM from 'react-dom';

const colorsItemOne = React.createElement('li', {}, 'Pink');
const colorsItemTwo = React.createElement('li', {}, 'Yellow');
const colorsItemThree = React.createElement('li', {}, 'Blue');
const colors = React.createElement('ol', {}, colorsItemOne, colorsItemTwo, colorsItemThree);

const musicItemOne = React.createElement('li', {}, 'Panic! at the Disco');
const musicItemTwo = React.createElement('li', {}, 'Coldplay');
const musicItemThree = React.createElement('li', {}, '3OH3!');
const music = React.createElement('ol', {}, musicItemOne, musicItemTwo, musicItemThree);

const foodItemOne = React.createElement('li', {}, 'Pizza');
const foodItemTwo = React.createElement('li', {}, 'Bacon');
const foodItemThree = React.createElement('li', {}, 'Ice cream');
const food = React.createElement('ol', {}, foodItemOne, foodItemTwo, foodItemThree);

const websiteLinkOne = React.createElement('a', {href: 'https://www.reddit.com'}, 'www.reddit.com');
const websiteLinkTwo = React.createElement('a', {href: 'https://www.twitter.com'}, 'www.twitter.com');
const websiteLinkThree = React.createElement('a', {href: 'https://www.google.com'}, 'www.google.com');
const websiteItemOne = React.createElement('li', {}, websiteLinkOne);
const websiteItemTwo = React.createElement('li', {}, websiteLinkTwo);
const websiteItemThree = React.createElement('li', {}, websiteLinkThree);
const websites = React.createElement('ol', {}, websiteItemOne, websiteItemTwo, websiteItemThree);



ReactDOM.render(
    React.createElement(
        'ul',
        {},
        React.createElement('li', { className: 'favoriteColors' }, 'Favorite Colors', colors),
        React.createElement('li', { className: 'favoriteMusic' }, 'Favorite Music', music),
        React.createElement('li', { className: 'favoriteFoods' }, 'Favorite Food', food),
        React.createElement('li', { className: 'favoriteWebsites' }, 'Favorite Websites', websites)
    ),
    document.getElementById('root')
);