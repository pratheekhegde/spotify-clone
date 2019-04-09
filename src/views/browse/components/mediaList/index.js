import React from 'react';

import MediaObject from '../mediaObject';
import { MediaListHeader, MediaObjectList } from './style'

const MediaList = props => 
    <div>
        <MediaListHeader>
            Some header
        </MediaListHeader>
        <MediaObjectList>
            <MediaObject />
        </MediaObjectList>
    </div>

export default MediaList;