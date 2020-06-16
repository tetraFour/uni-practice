import React from 'react'

import { ReactComponent as Arrow } from "../../assets/images/arrow.svg"

import "./style.sass"
import Programme from '../programme'
import JoinUs from '../JoinUs'



export default function Home() {
    return (<>
        <section className="home-section">
            <div className="container">
                <div className="introduce">
                    <span>Non Stop Solution for</span>
                    <h1>Education Needs Complete Solutions</h1>
                    <button>VIEW COURSE <Arrow /></button>
                </div>
                <div className="form-info">
                    <form>
                        <input type="text" placeholder="имя" />
                        <input type="email" placeholder="email" />
                        <input type="text" placeholder="имя" />
                        <input type="text" placeholder="имя" />
                        <button type="submit">отправить</button>
                    </form>
                </div>
            </div>
        </section>
        <Programme />
        <JoinUs />
    </>
    )
}
