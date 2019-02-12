import React,{Component} from 'react'
import "../../sass/GoodsList.scss"

class GoodsList extends Component{
    render(){
        let {list} = this.props;
        return(
            <div style={{width: "100%"}}>
                <ul className="goodsList">
                    {
                        list.map((item, idx)=>{
                            let nums = (item.price+'').split('.');
                            let num1 = nums[0];
                            let num2 = 0;
                            if(nums[1]) {
                                num2 = nums[1]
                            }
                            return(
                                <li key={idx}>
                                    <div className="Gleft">
                                    <img src={item.img} alt={item.title}/>
                                    </div>
                                    <div className="Gright">
                                        <h2 className="title">{item.title}</h2>
                                        <span className="price">￥<span>{num1}</span>.{num2}</span>
                                        <div className="user">
                                            <span>{item.comment}条评论</span>
                                            <span>好评率{item.good === '-1' ? '0' : item.good}%</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default GoodsList