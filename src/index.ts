// interface ITodo {
//     id:number,
//     title:string
// }
//
// class NoteBook {
//     private _todos:ITodo []
//
//
//     constructor(private name:string) {
//         this._initMain()
//     }
//
//     private _getTodosFromLS():void {
//         this._todos = JSON.parse(localStorage.getItem(this.name)) || []
//     }
//
//     private _setTodosToLS():void {
//         localStorage.setItem(this.name, JSON.stringify(this._todos))
//         this._initTodos()
//     }
//
//     private _initMain():void {
//         this._initForm()
//         this._initTodos()
//     }
//
//
//
//     private _initTodos() {
//         this._getTodosFromLS()
//         let todosDiv = document.querySelector('#todos') as HTMLDivElement
//         todosDiv.innerHTML = ''
//         this._todos.forEach(todo =>{
//             const todoDiv = document.createElement('div')
//             todoDiv.innerText = `${todo.id}) ${todo.title}`
//             todosDiv.append(todoDiv)
//         })
//
// }
//
//
//     private _initForm() {
//         const form = document.forms['form'] as HTMLFormElement
//         form.onsubmit = (e) => {
//             e.preventDefault()
//             const input = e.target['title'] as HTMLInputElement
//             const id = this._todos.slice(-1)[0]?.id + 1 || 1
//             this._todos.push({id, title: input.value})
//             this._setTodosToLS()
//             form.reset()
//         }
//     }
//
// }
//
// new NoteBook('notebook1')






















interface ITodo {
    id:number,
    title:string
}

class NoteBook {

    private _todo:ITodo[]


    constructor(private name:string) {
        this._initMain()
    }

    private _setTodoToLs():void {
        localStorage.setItem(this.name, JSON.stringify(this._todo))
        this._initTodos()
}

private _getTodoFromLS():void {
        this._todo = JSON.parse(localStorage.getItem(this.name)) || []
}

    private _initMain():void {
        this._initForm()
        this._initTodos()
    }

    private _initTodos():void {
        this._getTodoFromLS()
        let todosDiv = document.querySelector('#todos') as HTMLDivElement
        todosDiv.innerHTML = ''
        this._todo.forEach(todo => {
        let todoDiv = document.createElement('div')
            todoDiv.innerHTML = `${todo.id}) ${todo.title}`
            todosDiv.append(todoDiv)
        })
    }

    private _initForm():void {
        const form = document.forms['form'] as HTMLFormElement
        form.onsubmit = (e) => {
            e.preventDefault()
            let input = e.target['title'] as HTMLInputElement
            let id = this._todo.slice(-1)[0]?.id || 1
            this._todo.push({id, title: input.value})
            this._setTodoToLs()
            form.reset()
        }

    }
}

new NoteBook('notebook1')