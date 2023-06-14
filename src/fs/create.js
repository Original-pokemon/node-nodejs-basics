import { writeFile } from 'node:fs/promises';

import fsOperationFailedMessage from './constants.js';
import getPath from './utils.js';

const create = async () => {
  const filePath = getPath(import.meta.url, 'fresh.txt')
  try {
    await writeFile(filePath, 'I am fresh and young')
  } catch (error) {
    throw new Error(fsOperationFailedMessage + error)
  }
}

await create();