import React from 'react';
import styled from 'styled-components';
import GroupsLogos from './GroupsLogos';
import logos from './logo.JSON';


const StyledGroups = styled.div`
    height: 60vh;
    width: 100vw;
    background: grey;
    text-align: center;
    overflow: hidden;
    display: grid;
    grid-template-rows: 10vh 15vh 4vh 26vh 1fr;
    grid-template-columns: 1fr 90vw 1fr;
& > h1 { 
    grid-row: 2;
    grid-column: 2;
    font-size: calc(var(--base)* 2.5);
    font-weight: lighter;
    & > span { 
        color: #831212;
        font-size: inherit; 
    }
}

& > .groups-container {
            grid-column: 2;
            display: grid;
            grid-auto-flow: row;
          & .groups-logos {  
            justify-content: space-between;
            grid-row: 1;
            height: 12vh;
            width: 90vw;
            display: grid;
            grid-template-columns:repeat(8, 10vw);
        }
      & .logo-frame > img {
          grid-template-rows: repeat(10, 1fr);
      }
      & .logo-frame > p {
          font-size: calc(var(--base)* .5);
          font-family: Verdana, sans-serif;
          color: black;
          font-weight: bold;
      }
}

& #fwd-arrow, #rwd-arrow {
    display: none;
    z-index: 5;                   /* This is for concealing images beneath ( for carousel on phones )*/
    position: absolute;
}

/*************************************************************/

@media screen and (max-width: 768px) {    // tablet query
    height: 28vh;
    grid-template-rows: 2vh 8vh 2vh 12vh 1fr;
    & > h1 {
        font-size: calc(var(--base)* 1.8);
    }
}

/**********************************************************/
@media screen and (max-width: 376px) {      // phone query
    height: 58vh;
    grid-template-rows: 3vh 6vh 6vh auto 4vh;
    grid-template-columns: 1fr 62vw 1fr;
    & > h1 {
        font-size: calc( var(--base)* 1.3);
    }
    & > .groups-container {
        & > div.groups-logos {
            height: 37vh;
            width: 608vw;
            grid-column: 2;
            grid-template-columns: unset;  // critical for create slider effect
            grid-auto-columns: 60vw;
            grid-auto-flow: column;

            & .logo-frame {
                & > p {
                    font-size: calc( var(--base));
                }
            }
        }

        & > #fwd-arrow, #rwd-arrow {
                                            //background: purple;
        background: grey;
        display: block;
        font-size: calc( var(--base) * 2.2);
        font-weight: bold;
        border-width: 0;
        color: wheat;
        width: 14vw;
        height: 35vh;
      }       
  }
}
`

const GroupsContainer = styled.div`
    grid-row: 4;
    grid-column: 2;
    color: #a1a1a1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`
const LogoFwd = styled.button`
    right: 0;
`
const LogoBack = styled.button`
    left: 0;
`

class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.incrementLogo = this.incrementLogo.bind(this);
        this.decrementLogo = this.decrementLogo.bind(this);
        this.state = {
            count: 0,
            range: ''
        };
    }
    incrementLogo() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
        const fwd = (arr) => {
            let popped = arr.pop();
            arr.unshift(popped);
            return this.state.range;
        }
        fwd(logos)
    }
    decrementLogo() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        })
        const bkwd = (arr) => {
            let shifted = arr.shift();
            this.state.range = arr.push(shifted);
            return this.state.range;
        }
        bkwd(logos)
    }
    render() {
        return (
            <StyledGroups className="groups">
                <h1>RC <span>Business Groups</span></h1>
                <GroupsContainer className="groups-container">
                    <LogoBack onClick={this.incrementLogo} id="fwd-arrow">&lt;</LogoBack>
                    <GroupsLogos className="groups-logos" range={this.nuarr} cue={this.state.range} />
                    <LogoFwd onClick={this.decrementLogo} id="rwd-arrow">&gt;</LogoFwd>
                </GroupsContainer>
            </StyledGroups>
        )
    }
}
export default Groups;