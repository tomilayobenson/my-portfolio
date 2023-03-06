import equipped from '../images/equipped.jpg';
import lyn from '../images/lyn.jpg';
import postlify from '../images/postlify.jpg';
import satflik from '../images/satflik.jpg';
import satflip from '../images/satflip.png';
import todo from '../images/todo.png';

export const PROJECTS = [
    {
        id: 0,
        image: satflik,
        title: 'Movie Directory',
        description:
            'Designed a movie listings website using React, Reactstrap and the TMDB api.The home page shows a listing of popular movies which can be filtered by category. Once each movie is clicked, a beautifully designed details page is displayed.',
        github: 'https://github.com/tomilayobenson/satflik-movies',
        link: ''
    },
    {
        id: 1,
        image: equipped,
        title: 'Equipped02 - Rent on the Go',
        description:
            'Designed the front end for a Rent-on-the-go website alongside a team of other Developers using technologies such as React and Reactstrap and Redux for global state management. The post an item form uses redux to post new products to the database.',
        github: 'https://github.com/tomilayobenson/equipped02',
        link: ''
    },
    {
        id: 2,
        image: todo,
        title: 'To Do List',
        description:
            'Designed a simple to-do list web application where users can add items, delete items and update items on the list, using React. This was achieved using simple useState variable and powerful array methods such as filter and map.',
        github: 'https://github.com/tomilayobenson/my-todo',
        link: ''
    },
    {
        id: 3,
        image: satflip,
        title: 'Movie Directory App',
        description:
            'A mobile app version of the Satflik movies project built using React native and Redux for state management. The categories array was managed using redux.',
        github: 'https://github.com/tomilayobenson/satflik-app',
        link: ''
    },
    {
        id: 4,
        image: postlify,
        title: 'Event DP Generator',
        description:
            'Designed websites that allow vendors share link for downloading personalized posters with their event attendees. This was done using html, css and javascript canvas and hosted on Netlify.',
        github: '',
        link: 'https://dp.bloomingladiescoop.ca'
    },
    {
        id: 5,
        image: lyn,
        title: 'CMS Websites',
        description:
            'Designed and hosted several websites using content management systems such as Wordpress, Shopify and Square Online. Websites designed includes: https://dynamicrsltd.com and many more.',
        github: '',
        link: 'https://lynhairstylez.com'
    }
];
