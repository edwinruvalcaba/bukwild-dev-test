import { useState } from 'react';
import './styles/App.css';
import Loading from './components/Loading';
import Layout from './components/Layout';
import Marquee from './components/Marquee';

const backgroundImagePath = process.env.PUBLIC_URL + '/img/';

function App(props) {
  const { data } = props;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${backgroundImagePath}${data.pages[page].blocks[0].background})`,
      }}
    >
      {loading && <Loading setLoading={setLoading} />}
      <Layout data={data} setPage={setPage} />
      <Marquee pageData={data.pages[page]} />
    </div>
  );
}

export default App;
