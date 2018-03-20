import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCar} from '../actions/index';

class CarsList extends Component {
    showList () {
        return this.props.cars.map((car)=> {
            return (
                // onClick={selectCar(car)} === onClick={() => this.props.selectCar(car)}
                <li onClick={() => this.props.select(car)} key={car.id}>{car.name}</li>
            );
        });
    }
    render () {
        return (
            <ol>
                {this.showList ()}
            </ol>
        );
    }
}
//функция связывает хранилище и пропсы(переводит из стэйт в пропсы ,чтобы юзать пропсы)
function mapStateToProps(state) {
    return {
        cars:state.cars
    }
}
//функция связывает хранилище и функции(чтобы мы с ними могли работать как со свойствами(пропсами))
function matchDispatchToProps(dispatch) {
    return bindActionCreators({select:selectCar},dispatch)
}
export default connect (mapStateToProps,matchDispatchToProps)(CarsList);