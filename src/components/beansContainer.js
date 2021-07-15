import React, { Component } from 'react'


class BeansContainer extends Component {


    componentDidMount()  { 
        this.props.fetchBeans()
    }



    render() {
        return (
            <div>
                Beans Container 
            </div>
        )
    }
}



export default  BeansContainer;