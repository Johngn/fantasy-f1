/* eslint-disable import/no-anonymous-default-export */
import prisma from '../../../db/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const results = await fetch(
    'http://ergast.com/api/f1/2022/last/results.json'
  );
  console.log(results);

  return res.status(200).json(results);
};
