import { FunctionComponent } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';

const Results: FunctionComponent = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(['drivers'], () =>
    fetch('http://ergast.com/api/f1/2022/last/results.json').then(res =>
      res.json()
    )
  );

  // console.log(data);

  const calculatePointsForDriver = (driver: string) => {
    const currentDriver = data.MRData.RaceTable.Races[0].Results.filter(
      (driver: any) => driver.Driver.code === 'PER'
    );
    console.log(currentDriver[0]);

    let total = 0;
    total += parseInt(currentDriver[0].points);

    const teammate = data.MRData.RaceTable.Races[0].Results.filter(
      (driver: any) =>
        driver.Constructor.constructorId ===
        currentDriver[0].Constructor.constructorId
    ).filter((driver: any) => driver !== currentDriver[0]);

    if (parseInt(teammate[0].position) > parseInt(currentDriver[0].position)) {
      total += 5;
    }

    const passes =
      parseInt(currentDriver[0].grid) - parseInt(currentDriver[0].position);
    total += passes * 2;
    console.log(total);
  };

  if (isSuccess) {
    calculatePointsForDriver('AL');
  }

  return (
    <div>
      <Head>
        <title>Fantasy f1</title>
        <meta name="description" content="Fantasy Formula One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
};

export default Results;
