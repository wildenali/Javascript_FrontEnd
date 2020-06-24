import React, {Component, Fragment} from 'react';
import './B_getPostsFakeAPI.css'
import BgetPostsFakeAPIStateless from './B_getPostsFakeAPIStateless';

import axios from 'axios';

// Dengan cara STATEFULL component
class BgetPostsFakeAPI extends Component {
    state = {
        post: []
    }

    // Ketika komponen berhasil di mount ing, maka kita akan mengambil API dari post (sumber) 
    componentDidMount(){
        // Cara memanggil API, bisa dengan 'fetch' atau 'axios'
        // Cara 1 - fetch
        /*
        fetch('http://localhost:3004/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                post: json
            })
        })
        */

        // Cara 2 - Axios
        axios.get('http://localhost:3004/posts')
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.setState({
                post: result.data
            })
        })

    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Ambil data FAKE API dengan GET</p>
                {
                    this.state.post.map(post => {
                        return <BgetPostsFakeAPIStateless key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BgetPostsFakeAPI;