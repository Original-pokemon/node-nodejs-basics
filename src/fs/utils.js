import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function getPath(url, fileName = '', directory = 'files') {
    return normalize(join(dirname(fileURLToPath(url)), directory, fileName))
}