import React from 'react';

const Contact = () => {
    return (
        <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
            <h1 className="text-3xl text-white mb-4">Get in Touch</h1>
            <p className="text-white mb-4"></p>
            <div className="text-white mb-4">
                <p>
                    <strong>Email: </strong>
                    <a href="mailto:cepedageorgea@gmail.com" className='text-blue-600 hover:underline'>
                        CepedaGeorgeA@gmail.com
                    </a>
                </p>
                <p>
                    <strong>LinkedIn: </strong>
                    <a href="https://www.linkedin.com/in/george-cepeda/" className='text-blue-600 hover:underline'>
                        Find me on LinkedIn!
                    </a>
                </p>
                <p>
                    <strong>GitHub: </strong>
                    <a href="https://github.com/GeorgeCepeda" className='text-blue-600 hover:underline'>
                        Find my work on Github! 
                    </a>
                </p>
            </div>

        </div>
    )
}

export default Contact