import styled from 'styled-components';

export const MediaObjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 177px;
    margin-right: 18px;
    margin-bottom: 20px;
    transition-property: transform;
    transition: none 33ms cubic-bezier(.3,0,.7,1);
    transition-property: transform;

    .title {
        cursor: pointer;
        color: white;
        text-align: center;
        padding-top: 15px;
        font-weight: 600;
    }

    .subtitle{
        color:#b3b3b3;
        text-align: center;
        padding-top: 10px;
    }
`

export const MediaImage = styled.img`
    cursor: pointer;
    background-color: #282828;
    max-width: 177px;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.3,0,.4,1);
    transition-duration: .1s;

    ${MediaObjectContainer}:hover & {
       opacity: 0.3;
    }
`;

export const PlayIcon = styled.div`
    background-color: rgba(0,0,0,0);
    display: none;
    position: absolute;
    width: 62px;
    height: 62px;
    top: 22%;
    left: 32%;
    color: #fff;
    border: 0;
    border-radius: 500px;
    box-sizing: content-box;
    outline: none;
    box-shadow: inset 0 0 0 1px #b3b3b3;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 500px;
        box-shadow: inset 0 0 0 1px #b3b3b3;
    }

    .svg {
        margin-left: 4px;
        transform: scale(.5);
        width: 100%;
        height: 100%;
    }
    &:hover {
        transform: scale(1.06);
        transition: none 33ms cubic-bezier(.3,0,0,1);
        transition-property: all;
        box-shadow: inset 0 0 0 1px #fff;
    }
    ${MediaObjectContainer}:hover & {
        display: block;
    }
`;