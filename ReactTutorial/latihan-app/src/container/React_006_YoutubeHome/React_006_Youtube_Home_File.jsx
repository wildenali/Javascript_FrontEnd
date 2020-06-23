import React from 'react';
import { Component } from 'react';
import React_006_YoutubeComp from '../../component/React_006_YoutubeComp/React_006_YoutubeComp_File';
import React_007_ProductParentChild from '../React_007_ProductParentChild/React_007_ProductParentChildFile';


// -------------------- React_006_YoutubeComp_Home_File --------------------
class React_006_YoutubeComp_Home extends Component {
    render() {
        return(
            <div>
                <p>-------------------- React_006_YoutubeComp_Home_File --------------------</p>
                <p>Youtube Componen</p>
                <br/>
                <React_006_YoutubeComp time="01.30" title="Judul 1" desc="Ini Description 1"/>
                <React_006_YoutubeComp time="03.24" title="Judul 2" desc="Ini Description 2"/>
                <React_006_YoutubeComp time="15.43" title="Judul 3" desc="Ini Description 3"/>
                <React_006_YoutubeComp time="13.12" title="Judul 4" desc="Ini Description 4"/>
                <React_006_YoutubeComp time="07.06" title="Judul 5" desc="Ini Description 5"/>
                <React_006_YoutubeComp/>
                <React_006_YoutubeComp time="10.32" title="Judul 6" desc="Ini Description 6"/>
                <React_006_YoutubeComp time="04.56" title="Judul 7" desc="Ini Description 7"/>
                <p>-------------------- React_006_YoutubeComp_Home_File --------------------</p>
                <br/>
                <p>-------------------- React_007_ProductParentChild_File --------------------</p>
                <p>Counter</p>
                <br/>
                <React_007_ProductParentChild />
                <p>-------------------- React_007_ProductParentChild_File --------------------</p>
            </div>
        )
    }
}

export default React_006_YoutubeComp_Home;

// -------------------- React_006_YoutubeComp_Home_File --------------------