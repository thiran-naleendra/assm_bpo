import { useState } from "react"
import './card.css'


function Card() {

    const [cards] = useState([

        {
            tittle: 'Card-1',
            text: `Card Details`
        },
        {
            tittle: 'Card-2',
            text: `Card Details`
        },
        {
            tittle: 'Card-3',
            text: `Card Details`
        },
        {
            tittle: 'Card-4',
            text: `Card Details`
        },
        {
            tittle: 'Card-5',
            text: `Card Details`
        },
        {
            tittle: 'Card-6',
            text: `Card Details`
        },
        {
            tittle: 'Card-7',
            text: `Card Details`
        },
        {
            tittle: 'Card-8',
            text: `Card Details`
        }

    ])

    return (
        <div>
            <div className="card-box">
                <section>
                    <div className="container22">
                        <div className="cards22">
                            {
                                cards.map((card, i) => (
                                    <div key={i} className="card22">
                                        <h3>
                                            {card.tittle}
                                        </h3>
                                        <p>
                                            {card.text}
                                        </p>
                                        <button className="btn22">
                                            Click
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Card