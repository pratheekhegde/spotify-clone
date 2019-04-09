import React, { Component } from 'react';
import { withRouter } from "react-router";

import MediaObject from '../mediaObject';
import { MediaListHeader, MediaObjectList, MediaObjectContainer } from './style'

class MediaList extends Component {
    state = {
        data: {
            featured:[
                {
                    title: "Made for Pratheek",
                    media: [
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/aefe640c168f3a851a35508e27e07d4256434b0f/1/en/large',
                            title:'Daily Mix 1',
                            subTitle: 'Gryffin, R3HAB, Elephante and more'
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title:'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://lineup-images.scdn.co/time-capsule_DEFAULT-en.jpg',
                            title:'Your Time Capsule',
                            subTitle: null
                        }
                    ]
                },
                {
                    title: "Recently played",
                    media: [
                        {
                            image: "https://i.scdn.co/image/ead31ea0910401a808f3f6cb22dd901eea4b96c9",
                            title: "Blue",
                            subTitle: "Jonas Blue"
                        }
                    ]
                }
            ],
            podcasts: [
                {
                    title: "Top Podcasts",
                    media: [
                        {
                            image: 'https://i.scdn.co/image/af487f0632b075bfa1e035ad246c9595a8ce9fc8',
                            title: 'On Purpose with Jay Shetty',
                            subTitle: null
                        },
                        {
                            image: "https://i.scdn.co/image/96b8b3d5b7c1a5ae952c7489406602539ce651c8",
                            title: 'Ted Talks Daily',
                            subTitle: null
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title: 'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title: 'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title:'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title:'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                    ]
                }
            ],
            charts: [],
            genre: [],
            new: [],
            discover: []
        }
    }

    render(){

        return (
            <React.Fragment>
                {this.state.data[this.props.match.params.category].map((section, key) =>{
                    return (
                        <div key={key}>
                            <MediaListHeader>
                                {section.title}
                            </MediaListHeader>
                            <MediaObjectList>
                                {section.media.map((m, k) => <MediaObject title={m.title} subTitle={m.subTitle} imageUrl={m.image} key={key+ '_' +k}/> )}
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