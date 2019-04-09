import styled from 'styled-components';

export const MediaObjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 177px;
    margin-right: 18px;
    margin-bottom: 20px;
    
    img {
        cursor: pointer;
        background-color: #282828;
        max-width: 177px;
        box-shadow: 0 0 10px rgba(0,0,0,.3);
        transition-timing-function: cubic-bezier(.3,0,.4,1);
        transition-duration: .1s;
        &:hover{
            opacity: 0.3;
        }
    }

    .playIcon {
        transform: scale(.5);
    }
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