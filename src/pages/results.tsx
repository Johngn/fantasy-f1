import { FunctionComponent } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';

const Results: FunctionComponent = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(['drivers'], () =>
    fetch('http://ergast.com/api/f1/2022/last/results.json').then(res =>
      res.json()
    )
  );

  return (
    <div>
      <Head>
        <title>Fantasy f1</title>
        <meta name="description" content="Fantasy Formula One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isLoading && 'Loading...'}
        {isSuccess &&
          data.MRData.RaceTable.Races[0].Results.map(
            ({ Driver, number }: any) => <p key={number}>{Driver.code}</p>
          )}
        {isError && 'Error!'}
      </main>
    </div>
  );
};

export default Results;
