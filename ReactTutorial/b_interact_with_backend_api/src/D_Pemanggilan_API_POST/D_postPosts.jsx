import React, {Component, Fragment} from 'react';
import './D_postPosts.css'
import DpostPostsStateless from './D_postPostsStateless';

import axios from 'axios';


// Dengan cara STATEFULL component
class DpostPosts extends Component {
    state = {
        post: [],

        // ini object untuk simpan datanya
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
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

    // function delete
    handleDelete = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            console.log(res);
            this.getPostAPI();
        })
    }

    // ketika input atau form itu berubah
    handleFormChange = (event) => {
        // console.log('Form Berubah');
        // console.log(event);
        // console.log(event.target);

        let formBlogPostNew = {...this.state.formBlogPost};
        // console.log('init state: ', this.state.formBlogPost);
        // console.log('new value: ', formBlogPostNew);
        let timeStamp = new Date().getTime();
        console.log(timeStamp);
        formBlogPostNew['id'] = timeStamp;

        console.log(event.target.name);
        formBlogPostNew[event.target.name] = event.target.value
        
        // this.setState({
        //     formBlogPost: formBlogPostNew
        // }, () => {
        //     console.log('nilai obj formBlogPost ', this.state.formBlogPost)
        // })
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSimpan = () => {
        console.log(this.state.formBlogPost);
        this.postDataToAPI();
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
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Isi Blog</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-simpan" onClick={this.handleSimpan}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <DpostPostsStateless key={post.id} data={post} hapus={this.handleDelete}/>
                    })
                }
            </Fragment>
        )
    }
}

export default DpostPosts;