import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Star Wars Characters</h1>

            <ul>
                {Object.values(props.people).map(person => (
                    <li key={person.name}>
                        <Link as={`/p/${person.name}`} href={{pathname: '/post', query: {person: JSON.stringify(person)}}}>
                            <a>{person.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <style jsx>{`
            div {
                height: 80vh;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://swapi.co/api/people/');
    const data = await res.json();

    return { people: data.results }
}

export default Index;