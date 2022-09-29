import React from 'react';
import './QnA.css'
const QnA = () => {
    return (
        <div className='qnaContainer'>
            <h1>Simple Questions and Answers</h1>
             <div className='qnaSection'>
                  <div className='question'>
                        <h2>How React Works ?</h2>
                  </div>
                  <div className='answer'>
                      <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</p>
                  </div>
             </div>
             <div className='qnaSection'>
                  <div className='question'>
                        <h2>What are the Differences between Props and State ?</h2>
                  </div>
                  <div className='answer'>
                      <table class="table bg-dark text-light">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Props</th>
                                <th scope="col">State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Props are read-only.</td>
                                <td>State changes can be asynchronous.</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Props are immutable.</td>
                                <td>State is mutable.</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Props allow you to pass data from one component to other components as an argument.</td>
                                <td>State holds information about the components.</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Props are used to communicate between components.</td>
                                <td>States can be used for rendering dynamic changes with the component.</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>Props can be accessed by the child component.</td>
                                <td>State cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>Props can be accessed by the child component.</td>
                                <td>State cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>Stateless component can have Props.</td>
                                <td>Stateless components cannot have State.</td>
                                </tr>
                            </tbody>
                            </table>
                  </div>
             </div>
             <div className='qnaSection'>
                  <div className='question'>
                        <h2>Why should we use useEffect ?</h2>
                  </div>
                  <div className='answer'>
                      <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</p>
                  </div>
             </div>
        </div>
    );
};

export default QnA;