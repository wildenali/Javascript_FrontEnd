import React, {Component, Fragment} from 'react';
import './E_putPosts.css'
import EputPostsStateless from './E_putPostsStateless';

import axios from 'axios';


// Dengan cara STATEFULL component
class EputPosts extends Component {
    state = {
        post: [],

        // ini object untuk simpan datanya
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    // fungsi untuk memanggil data get API lagi, seletah di delete, supaya tampilannya bisa ter refresh
    getPostAPI = () => {
        // axios.get('http://localhost:3004/posts')
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')   // ini cara nge sortir sekalian, sortir yg terbaru duluan
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    // post data
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error coy: ', err)
        })
    }

    // put data
    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            // console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
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

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    // ketika input atau form itu berubah
    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSimpan = () => {
        // console.log(this.state.formBlogPost);
        if (this.state.isUpdate) {
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

    // Ketika komponen berhasil di mount ing, maka kita akan mengambil API dari post (sumber) 
    componentDidMount(){
        // disimpelkan jadi
        this.getPostAPI();  // ini sama aja dengan Cara 2

    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>POST API</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Isi Blog</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-simpan" onClick={this.handleSimpan}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <EputPostsStateless key={post.id} data={post} hapus={this.handleDelete} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
}

export default EputPosts;