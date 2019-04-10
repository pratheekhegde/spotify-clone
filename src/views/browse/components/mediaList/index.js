import React, { Component } from 'react';
import { withRouter } from "react-router";

import MediaObject from '../mediaObject';
import { MediaListHeader, MediaObjectList } from './style'

class MediaList extends Component {
    state = {
        data: {
            featured: [
                {
                    title: "Made for Pratheek",
                    media: [
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/aefe640c168f3a851a35508e27e07d4256434b0f/1/en/large',
                            title: 'Daily Mix 1',
                            subTitle: 'Gryffin, R3HAB, Elephante and more'
                        },
                        {
                            image: 'https://dailymix-images.scdn.co/v1/img/d011c95081cd9a329e506abd7ded47535d524a07/2/en/large',
                            title: 'Daily Mix 2',
                            subTitle: 'Pink Floyd, David Bowie, Queen and more'
                        },
                        {
                            image: 'https://lineup-images.scdn.co/time-capsule_DEFAULT-en.jpg',
                            title: 'Your Time Capsule',
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
                            image: 'https://i.scdn.co/image/601a7c46ddfefa633617235998d92ae703dad21f',
                            title: 'The Mindset & Motivation Podcast',
                            subTitle: null
                        },
                        {
                            image: 'https://i.scdn.co/image/3d3d374a8719eef986dce454654d2f1b68deac57',
                            title: 'Stuff You Should Know',
                            subTitle: null
                        }
                    ]
                }
            ],
            charts: [{
                title: "Featured Charts",
                media: [
                    {
                        image: 'https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg',
                        title: 'Global Top 50'
                    },
                    {
                        image: 'https://charts-images.scdn.co/REGIONAL_US_DEFAULT.jpg',
                        title: 'United States Top 50'
                    },
                    {
                        image: 'https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg',
                        title: 'Global Viral 50'
                    },
                    {
                        image: 'https://charts-images.scdn.co/VIRAL_US_DEFAULT.jpg',
                        title: 'United States Viral 50'
                    }
                ]
            }],
            genre: [{
                title: 'Genres & Moods',
                media: [
                    {
                        title: 'Pop',
                        image: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg'
                    },

                    {
                        title: 'Bollywood',
                        image: 'https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg'
                    },

                    {
                        title: 'Romance',
                        image: 'https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg'
                    },

                    {
                        title: 'Punjabi',
                        image: 'https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg'
                    },

                    {
                        title: 'Electronic/Dance ',
                        image: 'https://t.scdn.co/media/links/partyicon_274x274.jpg'
                    },

                    {
                        title: 'Tamil',
                        image: 'https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg'
                    },

                    {
                        title: 'Hip-Hop',
                        image: 'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg'
                    },

                    {
                        title: 'R&B',
                        image: 'https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg'
                    }
                ]

            }],
                new: [
                    {
                      title: 'The best new releases',
                      media: [
                          {
                              title: 'New Music Friday',
                              image: 'https://pl.scdn.co/images/pl/default/3e391fd0108865d9837181bef6cc9e86d22def18'
                          }
                      ]  
                    },
                    {
                        title: 'New albums & singles',
                        media: [
                            {
                                title: 'KILL THIS LOVE',
                                subTitle: 'BLACKPINK',
                                image: 'https://i.scdn.co/image/8e3cc2e1bbb69bc5ca30de332792ae1aa2493db8'
                            },
                            {
                                title: 'Cool',
                                subTitle: 'Jonas Brothers',
                                image: 'https://i.scdn.co/image/941fad97d2cb7b25be2272fba7492a00e968ca3d'
                            }
                        ]
                    }
                ],
                discover: [{
                    title: 'Top recommendations for you',
                    media: [
                        {   
                            title: 'X',
                            subTitle: 'KESI',
                            image: 'https://i.scdn.co/image/d4916b65002b8c9e58d4e224949f309228c68eed'
                        },
                        {   
                            title: 'Sagas of a Fallen Angel, Vol. 1',
                            subTitle: 'Lifeafterdeath',
                            image: 'https://i.scdn.co/image/950aaff3b6b107717a61d9219e36b4f264f37c54'
                        },
                        {   
                            title: 'Atmozfears',
                            subTitle: 'Demi Kanon',
                            image: 'https://i.scdn.co/image/388686e9585ffbe75b20c6c23ee1d9256fa52700'
                        },
                        {   
                            title: 'MADE TO MOVE AIR',
                            subTitle: 'Losi',
                            image: 'https://i.scdn.co/image/85454556a732a2f35ff6c65724ac0369a78b521c'
                        },
                        {   
                            title: 'Oxygen',
                            subTitle: 'Morfil',
                            image: 'https://i.scdn.co/image/e32e65569bd3598cddffbe12199ad6c3800a8f72'
                        },
                        {   
                            title: 'Borgeous',
                            subTitle: 'Nevve',
                            image: 'https://i.scdn.co/image/45e8fa6376b5054e37ff799e8077d1dde3675c65'
                        },
                        {   
                            title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
                            subTitle: 'Billie Eilish',
                            image: 'https://i.scdn.co/image/16160e9999e3395dfdef718d2e7cc8432d728920'
                        },
                        {   
                            title: 'Symphony',
                            subTitle: 'Sick Individuals, Nevve',
                            image: 'https://i.scdn.co/image/07898f1d3e7fcb7e725e71976321f037c43878c2'
                        },
                        {   
                            title: 'Potentie',
                            subTitle: 'Stefan en Sean',
                            image: 'https://i.scdn.co/image/a121e96b6bd2d2d9d9287a6ebba5666c3c3fa417'
                        },
                        {   
                            title: 'Up All Night',
                            subTitle: 'R3HAB, MOTi',
                            image: 'https://i.scdn.co/image/61f8a19d955f4dca1f63ff52a6b743c69ec3e9cf'
                        },
                        {   
                            title: 'Better Than This',
                            subTitle: 'Kaaze',
                            image: 'https://i.scdn.co/image/6732cbb49c9b97e80baaddb2ba22cd0bc34d8680'
                        },
                        {   
                            title: 'Something Strange',
                            subTitle: 'Vicetone, Haley Reinhart',
                            image: 'https://i.scdn.co/image/c1699da6c1ad9f8d36777053b62c1278f4298bfb'
                        }
                    ]
                }]
            },
            gradients: {
                featured: 'linear-gradient(to right bottom, rgb(55, 67, 98), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
                podcasts: 'linear-gradient(to right bottom, rgb(105, 48, 49), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
                charts: 'linear-gradient(to right bottom, rgb(28, 77, 106), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
                genre: 'linear-gradient(to right bottom, rgb(39, 37, 39), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
                new: 'linear-gradient(to right bottom, rgb(55, 72, 98), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
                discover: 'linear-gradient(to right bottom, rgb(150, 62, 3), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)'
            }
    }
    applyGradient() {
            const g = this.state.gradients[this.props.match.params.category]
            if (g) {
                document.getElementById('g').style.backgroundImage = this.state.gradients[this.props.match.params.category]
            } else {
                document.getElementById('g').style.backgroundImage = null
            }
    }
    componentDidMount() {
            if (typeof (window) !== 'undefined') {
                this.applyGradient();
            }
    }
    componentDidUpdate() {
            this.applyGradient()
    }
    render() {

            return (
                <React.Fragment>
                    {this.state.data[this.props.match.params.category].map((section, key) => {
                        return (
                            <div key={key}>
                                <MediaListHeader>
                                    {section.title}
                                </MediaListHeader>
                                <MediaObjectList>
                                    {section.media.map((m, k) => <MediaObject title={m.title} subTitle={m.subTitle} imageUrl={m.image} key={key + '_' + k} />)}
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