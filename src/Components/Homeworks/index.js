import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Avinash Murugappan and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/Avinash-Murugappan/git-practice/tree/main"> Link</a> </td>

      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/xxqdeRB"> Link</a> </td>

      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 2.1</td>
          <td>Local and Session Storage </td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/zYZdqev"> Link</a> </td>
      </tr>

      <tr>
          <th scope="row">2</th>
          <td>Homework 2.2</td>
          <td>Build a Wynisco Bootcamp Class Website</td>
          <td><a href=" https://avinash-homrwork-2-2.netlify.app/"> Link</a> </td>
      </tr>
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
