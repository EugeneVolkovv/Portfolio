const place = document.getElementById("root");
//
// var Check = React.createClass ({
//     getInitialState: function () {
//         return {checked:true}
//     },
//     onCkickCheck: function () {
//       this.setState({checked:!this.state.checked})
//     },
//     render: function () {
//
//         var message;
//         if (this.state.checked){
//             message = 'выбран';
//         } else {
//             message = 'не выбран';
//         }
//         return (
//             <div>
//                 <input type="checkbox" defaultChecked={this.state.checked} onChange={this.onCkickCheck}/>
//                 <p>{message}</p>
//             </div>
//         );
//     }
//
// })

var Task = React.createClass ({

    getInitialState: function () {
        return {edit: false}
    },

    edit: function () {
       this.setState({edit: true})
    },
    save: function () {
        var value = this.refs.newTxt.value;
        if (value.length>0) {
            this.props.update(this.refs.newTxt.value,this.props.index)
            this.setState({edit: false})
        } else {
            alert('Запишите задание');
        }
    },
    remove: function () {
        this.props.deleteBlock(this.props.index);
    },
    rendNorm: function () {
        return (
            <div className="box">
                <div className="text">{this.props.children}</div>
                <div className="btn-group">
                    <button className="btn blue" onClick={this.edit}>Редактировать</button>
                    <button className="btn red" onClick={this.remove}>Удалить</button>
                </div>
            </div>
        );
    },

    rendEdit: function () {
        return (
            <div className="box">
                <textarea ref="newTxt"  autoFocus={' '}></textarea>
                <div className="btn-group">
                    <button className="btn succes" onClick={this.save}>Сохранить</button>
                </div>
            </div>
        );
    },
    render: function () {
        if (this.state.edit) {
            return this.rendEdit();
        } else {
            return this.rendNorm();
        }

    }
});

var Field = React.createClass ({
    getInitialState: function () {
        return { tasks: []}
    },


    add: function (text) {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState({tasks:arr});
    },
    eachTask: function (item,i) {
        return (
            <Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
                {item}
            </Task>
        )
    },
    deleteBlock: function (i) {
        var arr = this.state.tasks;
        arr.splice(i,1);
        this.setState({tasks:arr});
    },
    updateText: function (text,i) {
        i
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks:arr});
    },
    render: function () {
       return (
           <div className="field">
               <button onClick={this.add.bind(null, 'Простое задание')} className="btn new" >Добавить</button>
               {this.state.tasks.map(this.eachTask)}
           </div>
       )
    },
});

ReactDOM.render (
    <Field />
    ,
    place
);

