import {atom, selector} from "recoil"

export const counterAtom = atom({
    key : "counter",
    default : 0
})


// weshould do it in separate folder selector

export const evenSelector = selector({
    key : "isEvenSelector",
    // get : it is a function, this func gets another key get as input. So whenever this function gets called iske andar ek get function ayga jahan se you can get any atom that you want, so you can select from any atom you want
    // a selector can also depend on multiple atoms
    get : function({get}){
        const currentCount = get(counterAtom);
        const isEven = (currentCount %2 == 0); //0,2,4,6,8
        return isEven;
        // return currentCount%2==0;


    }
})




// export default counterAtom;