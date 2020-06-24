import React, {Component, Fragment} from 'react';
import './A_getPosts.css'
import AgetPostStateless from './A_getPostsStateless';

import axios from 'axios';

// Dengan cara STATEFULL component
class AgetPost extends Component {
    state = {
        post: []
    }

    // Ketika komponen berhasil di mount ing, maka kita akan mengambil API dari post (sumber) 
    componentDidMount(){
        // Cara memanggil API, bisa dengan 'fetch' atau 'axios'
        // Cara 1 - fetch
        /*
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                post: json
            })
        })
        */

        // Cara 2 - Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                <p className='section-title'>Ambil data dengan GET</p>
                {
                    this.state.post.map(post => {
                        return <AgetPostStateless key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        )
    }
}

export default AgetPost;