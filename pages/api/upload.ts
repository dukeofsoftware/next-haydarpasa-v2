import { NextApiHandler, NextApiRequest } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/uploads');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'ok' });
  }
  if (req.method === 'POST') {
    try {
      await fs.readdir(path.join(process.cwd() + '/public', '/uploads'));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd() + '/public', '/uploads'));
    }
    await readFile(req, true);
    res.status(200).json({ message: 'ok' });
  }
};
export default handler;
