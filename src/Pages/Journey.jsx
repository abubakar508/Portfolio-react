import React from 'react'

const Journey = () => {
    const journeyData = [
        {
            date: '2015',
            Occurrence: ['Idea, Passion, Commintment, Curiosity'],
            description: "Brilliance aroused curiosity. Starting a journey to web development hit with a keyboard clack, then curiosity: 'How does this key know that it has been clicked?', and after an exhausting 8 year exp in and out, here I am unable to center a div. Pfft!"
        }, {
            date: '2015 - 2017',
            Occurence: ['!Lazy, !Weak, Resilience & !Giving up'],
            description: '3 years learning Python as a first languange (programming language). Too Long is not it? Infusing the basic of javascript in it. In the process of learning python as  language, Javascript became easier to learn.'
        }, {
            date: ' 2017 - 2018',
            Occurrence:  ['LAZY ME!'],
            description: 'All work & no play makes Jack a dull boy. Maybe I took long resting?'
        }, {
            date: '2020 - Date',
            Occurence:['Power, Grit, Resilience & Ambition'],
            description: 'Since 2020, 5 months before the onset of the contagious virus, Corona, I promised myself to get back to my coding roots and be the Coding Writer that I was. Since the onset, I delved into Blockchain, FullStack Web Developemnt, Vanilla Javascript Logics, and Data Science by Edureka. In the future, I will instill the blockchain and cryptocurrency knowledge in my small brain and become a pro blockchain developer.'
        }
    ]
    return (
        <div className=' md:p-4 '>
            <section className=' pt-20 pb-20 px-5 lg:px-20 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {journeyData.map((items, index) => {
                    return (
                        <div key={index} className=' flex flex-col space-y-3 text-white font-montserrat'>
                            <span className=' text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserratm font-medium text-orange-500 text-center'>
                                {items.date}
                            </span>
                            <span>
                                {items.Occurence}
                            </span>
                            <p>
                                {items.description}
                            </p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Journey
