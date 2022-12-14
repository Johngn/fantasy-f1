import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';

const Home: FunctionComponent = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(['drivers'], () =>
    fetch('http://localhost:3000/api/drivers').then(res => res.json())
  );
  console.log(data);

  return (
    <div>
      <Head>
        <title>Fantasy f1</title>
        <meta name="description" content="Fantasy Formula One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* {data.map(({ firstname }: any) => (
          <p>{firstname}</p>
        ))} */}
      </main>
    </div>
  );
};

export default Home;
