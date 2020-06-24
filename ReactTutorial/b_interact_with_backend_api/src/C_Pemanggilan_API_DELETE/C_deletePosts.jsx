import React, {Component, Fragment} from 'react';
import './C_deletePosts.css'
import CdeletePostsStateless from './C_deletePostsStateless';

import axios from 'axios';


// Dengan cara STATEFULL component
class CdeletePosts extends Component {
    state = {
        post: []
    }

    // fungsi untuk memanggil data get API lagi, seletah di delete, supaya tampilannya bisa ter refresh
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    // function delete
    handleDelete = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            console.log(res);
            this.getPostAPI();
        })
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
        // axios.get('http://localhost:3004/posts')
        // .then(result => {
        //     console.log(result);
        //     console.log(result.data);
        //     this.setState({
        //         post: result.data
        //     })
        // })
        // disimpelkan jadi
        this.getPostAPI();  // ini sama aja dengan Cara 2

    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Ambil data FAKE API dengan GET</p>
                {
                    this.state.post.map(post => {
                        return <CdeletePostsStateless key={post.id} data={post} hapus={this.handleDelete}/>
                    })
                }
            </Fragment>
        )
    }
}

export default CdeletePosts;