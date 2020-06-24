import React from 'react';

// Disini Stateless, karena cuma nge return nilai2 aja
const DpostPostsStateless = (props) => {
    return(
        <div>
            <div className="post">
                <div className="img-thumb">
                    {/* ambil gambar dari placeimg.com */}
                    <img src="http://placeimg.com/200/150/arch" alt="dummyGambar"/>
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="hapus" onClick={() => props.hapus(props.data.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DpostPostsStateless;