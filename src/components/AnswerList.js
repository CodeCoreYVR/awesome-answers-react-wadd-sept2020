import AnswerDetails from './AnswerDetails'
import answers from '../data/answers'

function AnswerList(props){
    return(
        <main>
            <h1>Answers</h1>
            <ul style={{
                listStyle: 'none',
                paddingLeft: 0,
            }}>
                {answers.map( ({ body, author, created_at}) => (
                    <li>
                        <p>{body}</p>
                        <p>answered by {author.full_name} </p>
                        <br/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default AnswerList;
