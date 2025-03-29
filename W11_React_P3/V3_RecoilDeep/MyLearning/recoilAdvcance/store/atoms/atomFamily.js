import {atom, selector, atomFamily} from "recoil"
import {TODOS} from "../../src/todo"

const todosAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : id => {
        return TODOS.find(x=>x.id==id)
    }
})

export {todosAtomFamily}