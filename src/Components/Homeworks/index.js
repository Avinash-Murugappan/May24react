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
          <th>Result Link</th>
          <th>Github Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/Avinash-Murugappan/git-practice/tree/main"> Link</a> </td>
          <td> None</td>

      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/xxqdeRB"> Link</a> </td>
          <td>None</td>

      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 2.1</td>
          <td>Local and Session Storage </td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/zYZdqev"> Link</a> </td>
          <td>None</td>
      </tr>

      <tr>
          <th scope="row">2</th>
          <td>Homework 2.2</td>
          <td>Build a Wynisco Bootcamp Class Website</td>
          <td><a href=" https://avinash-homrwork-2-2.netlify.app/"> Link</a> </td>
          <td> <a href="https://github.com/Avinash-Murugappan/Homework2-2">Link</a></td>
                </tr>

            <tr>
          <th scope="row">3</th>
          <td>Homework 3.1</td>
          <td>CSS Selectors Exercise</td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/JjWywGZ"> Link</a> </td>
          <td> None </td>
                </tr>
<tr>
                 <th scope="row">3</th>
          <td>Homework 3</td>
          <td>3HW Quiz</td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/ZEeJwoZ"> Link</a> </td>
          <td> None </td>
                </tr>

                 <tr>
          <th scope="row">3</th>
          <td>Homework 3.2</td>
          <td>Navigation Bar</td>
          <td><a href="https://homework3-2.netlify.app/"> Link</a> </td>
          <td><a href="https://github.com/Avinash-Murugappan/Homework3.2-NavigationBar/"> Link</a> </td>
                </tr>

                  <tr>
          <th scope="row">3</th>
          <td>Homework 3.3</td>
          <td>Javascript Function</td>
          <td><a href="https://codepen.io/avinash-murugappan/pen/YzZxgKx"> Link</a> </td>
          <td> None </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>Homework 4.1</td>
                  <td>Comcast Interview Homework</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/mdWqLgZ"> Link</a> </td>
                  <td> None </td>
                </tr>

              <tr>
                  <th scope="row">5</th>
                  <td>Homework 5.1</td>
                  <td>Theme Change</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/mdWpVOG"> Link</a> </td>
                  <td> None </td>
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>Homework 5.2</td>
                  <td>Frontier Homework</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/qBrpaGK"> Link</a> </td>
                  <td> None </td>
                </tr>

                <tr>
                  <th scope="row">8</th>
                  <td>Homework 8.1</td>
                  <td>Teleport Exercise</td>
                  <td><a href="https://productpage-homework8.netlify.app/"> Link</a> </td>
                  <td> <a href="https://github.com/Avinash-Murugappan/Responsive-Product-Webpage"> Link</a> </td>
                </tr>

                 <tr>
                  <th scope="row">10</th>
                  <td>Homework 10.1</td>
                  <td>CSS Grid</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/jOBKppy"> Link</a> </td>
                  <td> <a> None</a> </td>
                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>Homework 10.2</td>
                  <td>Lottery Project</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/jOBKpvB"> Link</a> </td>
                  <td> <a> None</a> </td>
                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>Homework 10.4</td>
                  <td>Hawaii Color Picker</td>
                  <td><a href="https://codepen.io/avinash-murugappan/pen/xxqaGpZ"> Link</a> </td>
                  <td> <a> None</a> </td>
                </tr>

                <tr>
                  <th scope="row">12</th>
                  <td>Homework 12.1</td>
                  <td>Carousal</td>
                  <td><a href="https://react-basicspractice.netlify.app/"> Link</a> </td>
                  <td> <a href="https://github.com/Avinash-Murugappan/React-Basics-Practice" >Link</a> </td>
                </tr>

                 <tr>
                  <th scope="row">12</th>
                  <td>Homework 12.2</td>
                  <td>Class Favorites</td>
                  <td><a href="https://react-basicspractice.netlify.app/"> Link</a> </td>
                  <td> <a href="https://github.com/Avinash-Murugappan/Vote-Favorite-Student" >Link</a> </td>
                </tr>

                 <tr>
                  <th scope="row">13</th>
                  <td>Homework 13.1</td>
                  <td>React Magazine</td>
                  <td><a href="https://marvel-magazine.netlify.app/"> Link</a> </td>
                  <td> <a href="https://github.com/Avinash-Murugappan/Marvel-magazine-posters-react" >Link</a> </td>
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
