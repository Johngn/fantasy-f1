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
        <h1>
          Results of the last race - {data.MRData.RaceTable.Races[0].raceName}{' '}
          {data.MRData.RaceTable.Races[0].season}
        </h1>
        <div
          style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <h2>Position</h2>
          <h2>Driver</h2>
          <h2>Points</h2>
        </div>
        {isLoading && 'Loading...'}
        {isSuccess &&
          data.MRData.RaceTable.Races[0].Results.map(
            ({ Driver, number, position, points }: any) => (
              <div
                key={number}
                style={{
                  display: 'flex',
                  width: '300px',
                  justifyContent: 'space-between',
                }}
              >
                <h2>{position}</h2>
                <h2>{Driver.code}</h2>
                <h2>{points}</h2>
              </div>
            )
          )}
        {isError && 'Error!'}
      </main>
    </div>
  );
};

export default Results;
