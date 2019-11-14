import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = () => {
  const router = useRouter();
  const data = JSON.parse(router.query.person)

  const {name, gender, hair_color, birth_year} = data;

  return (
    <Layout>
        <h1>{name} / <span className="lead">{birth_year}</span></h1>
        <h4>Gender: {gender}</h4>
        <p>Hair Color: {hair_color}</p>
    </Layout>
  );
};

export default Post;