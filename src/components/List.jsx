import React,{Component} from 'react'

import ListOperation from './List/ListOperation'
import GoodsList from './List/GoodsList'
import ListSearch from './List/ListSearch'
import Axios from 'axios';

class List extends Component{
    constructor(){
        super();

        this.state = {
            goods: []
        }
    }

    componentWillMount(){
        let _this = this;
        Axios.get("http://localhost:1138/data/list/list_01.json")
        .then(res =>{
            let goods = [];
            let data = res.data.data.hits;
            data.map(item =>goods.push({
                title: item.name,
                price: item.price,
                good: item.goodsUserGradeRate,
                comment: item.userGrade,
                img: item.img
            }))
            _this.setState({
                goods
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        let {goods} = this.state;
        return(
            <div>
                <ListSearch />
                <ListOperation />
                <GoodsList list={goods} />
            </div>
        )
    }
}

export default List