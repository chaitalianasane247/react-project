import React from 'react'
import ReactDOM from 'react-dom'
/*import Welcome from './components/welcome'
import Customer from './components/customer'*/
import Hello from './components/hello'
import Employee from './components/employee'
import App from'./App'
import { render } from '@testing-library/react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CustomerComponent from './routing/CustomerComponent'
import EmployeeComponent from './routing/EmployeeComponent'
import HomeComponent from './routing/HomeComponent'

/*function display()
{
  const element = (
    <div>
      <h1>Welcome to react</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(element,document.getElementById('root'));
}
setInterval(display,1000);*/

/*function Clock(props){
  return(
    <div>
      <h1>Welcome</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

function display()
{
  

  ReactDOM.render(
  <div>
    <Clock date={new Date()}/>
  </div>,document.getElementById('root'));
}
setInterval(display,1000);*/

const routing =(
  <Router>
    <div>
      <Route path="/" component={App}></Route>
      <Route path="/customers" component={CustomerComponent}></Route>
      <Route path="/employees" component={EmployeeComponent}></Route>
      <Route path="/home" component={HomeComponent}></Route>
    </div>
    </Router>
    )

    
ReactDOM.render(
        <App />,
        document.getElementById('root')
);

   /* ReactDOM.render(routing,
    document.getElementById("root"))
ReactDOM.render(<div>
  <App/>
</div>,
document.getElementById("root"))*/


/*ReactDOM.render(<h1>Welcome Varundeep</h1>, document.getElementById("mydata"))
ReactDOM.render(<h1>Varundeep Madari</h1>, document.getElementById("root"))
//Only one root should be there (div)
ReactDOM.render(<div>
                  <App/>
                </div>,
document.getElementById("root")) //functional component

ReactDOM.render(<div>
                  <Employee name1="Jayashree" name2="Isha" />
</div>, document.getElementById("mydata"))*/

/*
  <Welcome name="Naruto"/> 
  <Welcome name="Luffy"/>
  <Welcome name="Asta"/>
  <Customer name="Noelle"/>
  <Hello name="Robin" designation="History"/>
*/

/*class Clock extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() 
  {
    this.interval = setInterval(
      () => this.setState({ date: new Date()}), 1000);
  }

  componentWillUnmount() 
  {
    clearInterval(this.interval);
  }


  render() 
  {
    return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
    );
  }
}

ReactDOM.render(
        <div>
          <Clock />
          <Clock />
        </div>,
        document.getElementById('root')
);*/

