import React, { Component } from 'react';
import './QuizPage.css'

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [
            {
                "question": "Which is the only mammal that can’t jump?",
                "optionA": "Dog",
                "optionB": "Elephant",
                "optionC": "Goat",
                "optionD": "Lion",
                "answer": "Elephant"
            },
            {
                 "question": "How many Number of planets are there in our solar system? ",
                 "optionA": 9,
                 "optionB": 10,
                 "optionC": 11,
                 "optionD": 12,
                 "answer": 9
             },
             {
                 "question": "How many directions are present? ",
                 "optionA": 4,
                 "optionB": 3,
                 "optionC": 1,
                 "optionD": 2,
                 "answer": 4 
             },
             {
                 "question": "What is the capital of India? ",
                 "optionA": "Delhi",
                 "optionB": "Kolkata",
                 "optionC": "Mumbai",
                 "optionD": "Hyderabad",
                 "answer": "Delhi" 
             },
             {
                 "question": "Who is the present Prime Minister of India? ",
                 "optionA": "Jawaharlal Nehru",
                 "optionB": "Indira Gandhi",
                 "optionC": "Narendra Modi",
                 "optionD": "Ramnadh Kobind",
                 "answer": "Narendra Modi"
             },
             {
                 "question": "Who is called Little Master? ",
                 "optionA": "M.S.Dhoni",
                 "optionB": "Sachin Tendulkar",
                 "optionC": "Virat Kohli",
                 "optionD": "V.V.S.Lakshman",
                 "answer": "Sachin Tendulkar" 
             },
             {
                 "question": "What is the currency of India? ",
                 "optionA": "Dollar",
                 "optionB": "Euro",
                 "optionC": "Won",
                 "optionD": "Rupee",
                 "answer": "Rupee"
             },
             {
                 "question": "Sun rises in which direction? ",
                 "optionA": "South",
                 "optionB": "East",
                 "optionC": "North",
                 "optionD": "West",
                 "answer": "East" 
             },
             {
                 "question": "Which state is called as The Land of Rising Sun in India? ",
                 "optionA": "Andhra Pradesh",
                 "optionB": "Haryana",
                 "optionC": "Arunachal Pradesh",
                 "optionD": "Punjab",
                 "answer": "Arunachal Pradesh" 
             },
             {
                 "question": "Which was the first animal to go into space? ",
                 "optionA": "Cat",
                 "optionB": "Mouse",
                 "optionC": "Monkey",
                 "optionD": "Dog",
                 "answer": "Dog" 
             },
             {
                 "question": "Which planet is called as The Blue Planet?",
                 "optionA": "Jupiter",
                 "optionB": "Earth",
                 "optionC": "Saturn",
                 "optionD": "Uranus",
                 "answer": "Earth" 
             },
             {
                 "question": "How many continents are present?",
                 "optionA": "6",
                 "optionB": "8",
                 "optionC": "7",
                 "optionD": "9",
                 "answer": "7" 
             },
             {
                 "question": "Who is the inventor of computer?",
                 "optionA": "Charles Babbage",
                 "optionB": "Graham Bell",
                 "optionC": "Edison",
                 "optionD": "Max",
                 "answer": "Charles Babbage" 
             },
             {
                 "question": "Dennis Ritchie is the inventor of which programming language?",
                 "optionA": "Java Programming",
                 "optionB": "Python",
                 "optionC": "C programming",
                 "optionD": "Fortran",
                 "answer": "C Programming" 
             },
             {
                 "question": "Bredan Eich is the creator of?",
                 "optionA": "Java Programming",
                 "optionB": "C programming",
                 "optionC": "Python ",
                 "optionD": "Javascript",
                 "answer": "Javascript" 
             }
           ],
           qid : 0
        }
    }

    Previousqu = (e) => {
        console.log("clicked");
        this.setState({
            qid : (this.state.qid - 1 < 0) ? 14 : this.state.qid-1
        })
    }

    Nextque = (e) => {
        console.log("Next");
        this.setState({
            qid : (this.state.qid + 1 ) % 15 
        })
    }
    
    render() {
        return (
            <>
                <div className="quiz">
                <h1>Question</h1>
                <div className='question'>
                    <div className='one'>{this.state.qid} of {this.state.question.length}</div>
                    <div className='two'>{this.state.question[this.state.qid].question}</div>
                 </div>
                 <div className="option">
                     <div>{this.state.question[this.state.qid].optionA}</div>
                     <div>{this.state.question[this.state.qid].optionB}</div>
                     <div>{this.state.question[this.state.qid].optionC}</div>
                     <div>{this.state.question[this.state.qid].optionD}</div>
                 </div>
                 <br/><br/>
                 <div className='button'>
                     
             <div className='colour'><button onClick={this.Previousqu} className="prev">Previous</button></div>
             <div className='colour'><button onClick={this.Nextque} className="next">Next</button></div>
             <div className='colour'><button className="sub">Submit</button></div>
             </div>
             </div>
             </>
        );
    }
}

export default QuizPage;