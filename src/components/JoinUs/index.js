import React from 'react'

import "./style.sass"
import { ReactComponent as ArrowSuccess } from "../../assets/images/arrow-success.svg"

export default function JoinUs() {
    return (
        <section className="join-us-section">
            <div className="container">
                <h2>JOIN OUR <span>UNIVERSITY</span></h2>
                <p>Sit fringilla cum ullam suscipit doloremque! Officia ad massa elementum facilisi odio, malesuada tellus quisquam mollitia risus proident? Excepturi nobis sequi do, nemo maiores omnis.</p>
                <ul>
                    <li><ArrowSuccess /> UNIVERSITY ENTRANCE QUALIFICATION</li>
                    <li><ArrowSuccess /> HEALTH INSURANCE</li>
                    <li><ArrowSuccess /> ACCOMMODATION</li>
                    <li><ArrowSuccess /> SEMESTER CONTRIBUTION</li>
                    <li><ArrowSuccess /> APTTITUDE TEST</li>
                    <li><ArrowSuccess /> 100% JOB ASSURANCE</li>
                    <li><ArrowSuccess /> EARNING MONEY DURING YOUR STUDIES</li>
                </ul>
            </div>
        </section>
    )
}
