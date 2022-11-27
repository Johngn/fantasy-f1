/* eslint-disable import/no-anonymous-default-export */
import prisma from '../../../db/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const drivers = await prisma.driver.findMany();

  return res.status(200).json(drivers);
};
