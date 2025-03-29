import {atom, selector} from "recoil"
import axios from "axios"

//all atoms in navBar are hardCore Values : so to do so you need to do fetch request to backend using axios or fetch

//Asynchronous Data Query => values coming from the backend


// This is not write way of assigning defaults, we need to make actual API fetch here

/* const userNav = atom({
    key : "userNavBar",
    default : {
        notification : 0,
        network : 0,
        message : 0,
        job : 0
    }
}) */


// so following code will give error since, default value cannot be a function it can EITHER be a __synchronous data__ OR a selector which asynchronously fetches data 

// this is where concept of asynchronous data queries come into picture 

/* const userNav = atom({
    key : "userNavBar",
    default : async () => {
        const res = await axios.get("http://localhost:8000/notifications");
        return res.data
    }
}) */


// Selectors can be used one way to incorporate asynchronous data into the recoil data-flow graph. Please keep in mind that selectors represent idempotent functions : for given set of inputs they should always produce the same results (atleast for the lifetime of application). This is important as selectors evaluation may be cached, restarted, or executed multiple times.Because of this selectors are generally a good way to model read-only DB queries.

const userNav = atom({
    key : "userNavBar",
    default : selector({
        key : "userNavBarSelecto",
        get : async function({get}){
            await new Promise((r)=> setTimeout(r,5000)) // sleeps for 5 sec, So you would be able to see the white screen while the data is not fetched
            const res = await axios.get("http://localhost:8000/notifications");
            return res.data
        }
    })
})

// now we can see that immediately data is being fetched as soon as the page loads we donot see any loader that is because initially when there is no promise resolved, the screen is completely white and as soon as data is fetched it is rendered.
// This time the flash is not the 0s being present there, the flash is whole component not rendered so complete white screen

// We can confirm that by adding artificial delay there by using code => await new Promise((r) => setTimeout(r,5000));

// how to add loader : we will learn soon as we reach advance topics of this dayS


const allNavSelector = selector({
    key : "gettingAllNavStats",
    get : function({get}){
        const navBar = get(userNav);
        return navBar.notification + navBar.network + navBar.message + navBar.job
    }
})

// THESE I DONOT USE IN ASYNCHRONOUS DATA QUERY
const notificationAtom = atom({
    key : "notification",
    default : 1
})

const networkAtom = atom({
    key:"network",
    default : 100
})

const messageAtom = atom({
    key:"messages",
    default :5
})

const jobAtom = atom({
    key:"job",
    default :4
})


// using selectors a  normal useCase : let's say all the notifications that you get in network, messages, job and notifications : All combined you want to display it in Me button

const allNotificationSelector = selector({
    key : "userNotificationsSelector",
    get : function({get}){
        return get(messageAtom) + get(networkAtom) + get(notificationAtom) + get(jobAtom)
    }
})

export {jobAtom, notificationAtom, messageAtom, networkAtom, allNotificationSelector, userNav, allNavSelector}