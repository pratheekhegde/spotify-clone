import React, { Component } from 'react';
import { withRouter } from "react-router";

import MediaObject from '../mediaObject';
import { MediaListHeader, MediaObjectList } from './style'

class MediaList extends Component {
    state = {
        data: {
            featured:[
                {
                    title: "Made for 227svyctmd2qorgddkyraideq",
                    media: [
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Daily Mix 1',
                            subTitle: 'Gryffin, R3HAB, Elephante and more'
                        },
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Your Time Capsule',
                            subTitle: null
                        }
                    ]
                }
            ],
            podcasts: [
                {
                    title: "Top Podcasts",
                    media: [
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Daily Mix 1',
                            subTitle: 'Gryffin, R3HAB, Elephante and more'
                        },
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Your Time Capsule',
                            subTitle: null
                        },
                        {
                            image: 'https://place-hold.it/177x177',
                            title:'Your Time Capsule',
                            subTitle: null
                        }
                    ]
                }
            ]
        }
    }

    render(){

        return (
            <React.Fragment>
                {this.state.data[this.props.match.params.category].map((section, key) =>{
                    return (
                        <div key={key}>
                            <MediaListHeader >
                                {section.title}
                            </MediaListHeader>
                            <MediaObjectList>
                                {section.media.map(m => <MediaObject/> )}
                            </MediaObjectList>
                        </div>
                    )
                })
                }
            </React.Fragment>
        )
    }
}

export default withRouter(MediaList);