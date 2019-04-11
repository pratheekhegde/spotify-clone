import React from 'react';

import {MediaObjectContainer, MediaImage, PlayIcon} from './style';

const MediaObject = props => 
    <MediaObjectContainer>
        <MediaImage src={props.imageUrl} />
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subTitle}</div>
        <PlayIcon>
            <svg className="svg" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
        </PlayIcon>
    </MediaObjectContainer>

export default MediaObject;