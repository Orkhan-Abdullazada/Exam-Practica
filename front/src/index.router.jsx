import Wishlist from "./Page/Wishlist";

const { default: Add } = require("./Page/Add");
const { default: Home } = require("./Page/Home");
const { default: MainRoot } = require("./Page/MainRoot");

const ROUTES=[

{
    path:"/",
    element:<MainRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"Add",
            element:<Add/>
        },
        {
            path:"Wishlist",
            element:<Wishlist/>
        }
    ]
}

]
export default ROUTES