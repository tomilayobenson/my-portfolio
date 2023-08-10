import equipped from '../images/equipped.jpg';
import lyn from '../images/lyn.jpg';
import postlify from '../images/postlify-banner.jpg';
import satflik from '../images/satflik.jpg';
import satflip from '../images/satflip.png';
import todo from '../images/todo.png';

export const PROJECTS = [
    {
        id: 0,
        image: postlify,
        title: 'Event DP Generator',
        description:
            'Designed a website that allow vendors create an account, upload a poster, select a cutout area, make payment and generate a shareable link for downloading personalized posters by their event attendees. This was created using React, Node.js, Express.js, MobX and MongoDB.',
        github: '',
        link: 'https://postlify.live'        
    },
    {
        id: 1,
        image: equipped,
        title: 'Equipped02 - Rent on the Go',
        description:
            'Designed the front end and back end for a Rent-on-the-go website alongside a team of other Developers using the MERN stack (MongoDB Atlas, Express, React and Node) including Reactstrap and Redux for global state management.',
        github: 'https://github.com/tomilayobenson/equipped02',
        link: 'https://wonderful-gumdrop-6ce085.netlify.app/'
    },
    {
        id: 2,
        image: todo,
        title: 'To Do List',
        description:
            'Designed a simple to-do list web application where users can add items, delete items and update items on the list, using React. This was achieved using simple useState variable and powerful array methods such as filter and map.',
        github: 'https://github.com/tomilayobenson/my-todo',
        link: 'https://9tpx8c.csb.app/'
    },
    {
        id: 3,
        image: satflik,
        title: 'Movie Directory',
        description:
            'Designed a movie listings website using React, Reactstrap and the TMDB api.The home page shows a listing of popular movies which can be filtered by category. Once each movie is clicked, a beautifully designed details page is displayed.',
        github: 'https://github.com/tomilayobenson/satflik-movies',
        link: 'https://tourmaline-gaufre-817fb8.netlify.app/'       
    },
    {
        id: 4,
        image: satflip,
        title: 'Movie Directory App',
        description:
            'A mobile app version of the Satflik movies project built using React native and Redux for state management. The categories array was managed using redux.',
        github: 'https://github.com/tomilayobenson/satflik-app',
        link: ''
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
