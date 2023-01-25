import type { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'

// type Data = {
//     data: TProduct[],
//     length : number
//   }

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    res.setHeader('Content-type', 'application/json');
    res.status(200).json({ data: allEntries, length });
};

export default allAvos;