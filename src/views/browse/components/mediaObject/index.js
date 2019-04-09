import React from 'react';

import {MediaObjectContainer} from './style';

const MediaObject = props => 
    <MediaObjectContainer>
        <img class="image" src={props.imageUrl} />
        <div class="title">{props.title}</div>
        <div class="subtitle">{props.subTitle}</div>
        <div class="playIcon">
            <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path>
        </div>
    </MediaObjectContainer>

export default MediaObject;