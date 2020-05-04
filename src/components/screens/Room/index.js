import './style.css'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import ContentLayout from '../../layouts/ContentLayout'
import Player from '../../shared/Player'
import PokerCard from '../../shared/PokerCard'
import TotalBet from '../../shared/TotalBet'
import Bet from '../../shared/Bet'

function Room(props) {
    return (
        <MainLayout>
            <ContentLayout>
                <div id="Room">
                    <h1>Room 1</h1>
                    <div className="table strong-shadow">

                        <Player id="P1" />
                        <PokerCard id="P1C1" suit="back" number="" />
                        <PokerCard id="P1C2" suit="back" number="" />
                        <Bet id="BP1" amount="200" />

                        <Player id="P2" />
                        <PokerCard id="P2C1" suit="h" number="2" />
                        <PokerCard id="P2C2" suit="d" number="12" />
                        <Bet id="BP2" amount="265" />

                        <Player id="P3" />
                        <PokerCard id="P3C1" suit="back" number="" />
                        <PokerCard id="P3C2" suit="back" number="" />
                        <Bet id="BP3" amount="350" />

                        <Player id="P4" />
                        <PokerCard id="P4C1" suit="back" number="" />
                        <PokerCard id="P4C2" suit="back" number="" />
                        <Bet id="BP4" amount="485" />

                        <Player id="P5" />
                        <PokerCard id="P5C1" suit="back" number="" />
                        <PokerCard id="P5C2" suit="back" number="" />
                        <Bet id="BP5" amount="3050" />

                        <Player id="P6" />
                        <PokerCard id="P6C1" suit="back" number="" />
                        <PokerCard id="P6C2" suit="back" number="" />
                        <Bet id="BP6" amount="2345" />

                        <Player id="P7" />
                        <PokerCard id="P7C1" suit="back" number="" />
                        <PokerCard id="P7C2" suit="back" number="" />
                        <Bet id="BP7" amount="1340" />

                        <Player id="P8" />
                        <PokerCard id="P8C1" suit="back" number="" />
                        <PokerCard id="P8C2" suit="back" number="" />
                        <Bet id="BP8" amount="20" />

                        <Player id="P9" />
                        <PokerCard id="P9C1" suit="back" number="" />
                        <PokerCard id="P9C2" suit="back" number="" />
                        <Bet id="BP9" amount="50" />

                        <Player id="Dealer" />
                        <PokerCard id="F1" suit="s" number="8" />
                        <PokerCard id="F2" suit="s" number="9" />
                        <PokerCard id="F3" suit="s" number="7" />
                        <PokerCard id="T" suit="h" number="7" />
                        <PokerCard id="R" suit="c" number="7" />
                        <TotalBet amount="3350" />

                    </div>
                </div>
            </ContentLayout>
        </MainLayout>
    )
}

export default Room