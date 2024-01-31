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
var NoteBook = /** @class */ (function () {
    function NoteBook(name) {
        this.name = name;
        this._initMain();
    }
    NoteBook.prototype._setTodoToLs = function () {
        localStorage.setItem(this.name, JSON.stringify(this._todo));
        this._initTodos();
    };
    NoteBook.prototype._getTodoFromLS = function () {
        this._todo = JSON.parse(localStorage.getItem(this.name)) || [];
    };
    NoteBook.prototype._initMain = function () {
        this._initForm();
        this._initTodos();
    };
    NoteBook.prototype._initTodos = function () {
        this._getTodoFromLS();
        var todosDiv = document.querySelector('#todos');
        todosDiv.innerHTML = '';
        this._todo.forEach(function (todo) {
            var todoDiv = document.createElement('div');
            todoDiv.innerHTML = "".concat(todo.id, ") ").concat(todo.title);
            todosDiv.append(todoDiv);
        });
    };
    NoteBook.prototype._initForm = function () {
        var _this = this;
        var form = document.forms['form'];
        form.onsubmit = function (e) {
            var _a;
            e.preventDefault();
            var input = e.target['title'];
            var id = ((_a = _this._todo.slice(-1)[0]) === null || _a === void 0 ? void 0 : _a.id) || 1;
            _this._todo.push({ id: id, title: input.value });
            _this._setTodoToLs();
            form.reset();
        };
    };
    return NoteBook;
}());
new NoteBook('notebook1');
