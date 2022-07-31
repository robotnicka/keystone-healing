import FeedbackForm from '@components/FeedbackForm';
import JokeBlock from '@components/JokeBlock';
import Layout from '@components/Layout';
import siteMetadata from 'assets/data/siteMetadata';
import HeadSeo from 'components/HeadSeo';

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <img src="keystonelogo.svg" />
        <h2>Your health is the keystone to your life.</h2>
        <button>Book Appointment</button>
        <button>Contact Us</button>
        <FeedbackForm />
        <JokeBlock />
      </Layout>
    </>
  );
}
