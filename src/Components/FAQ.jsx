import React from 'react';

const FAQ = () => {
    return ( 
        <section className='faq centered'>
             <h1 className='primary-text koulen'><a href="/">Rainy Data</a></h1>
             <div className="question">
                <h3 className='primary-text koulen'>Why Rainy Data?</h3>
                <p>I created this site to hopefully help fellow developers save time in <br/> creating test databases to test their applications during development. </p>
             </div>
             <div className="question">
                <h3 className='primary-text koulen'>How do I download a database?</h3>
                <p>On the Rainy Data Home, simply click files, then click the file you wish to download.</p>
             </div>
             <div className="question">
                <h3 className='primary-text koulen'>How do I use a database?</h3>
                <p>Each database has an export function built in that can then be imported into your project. </p>
             </div>
             <div className="question">
                <h3 className='primary-text koulen'>What can I do with a database?</h3>
                <p>These databases can be useful to developers developing applications that take in information <br/> from the user, form a database, and then do something with that information. These test <br/> databases allow for the development of such projects before attaining the user data.</p>
             </div>
             <div className="question">
                <h3 className='primary-text koulen'>Will there be more databases coming soon?</h3>
                <p>Absolutely! Check back often for more!</p>
             </div>
        </section>
     );
}
 
export default FAQ;