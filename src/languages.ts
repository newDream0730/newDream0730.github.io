<<<<<<< HEAD
import { KNOWN_LANGUAGES } from './components/config';
=======
import { KNOWN_LANGUAGES } from './config';
>>>>>>> f504e447f718a9e93b04b204698361f67bef2abb

export { KNOWN_LANGUAGES };
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export function getLanguageFromURL(pathname: string) {
<<<<<<< HEAD
  const langCodeMatch = pathname.match(langPathRegex);
  return langCodeMatch ? langCodeMatch[1] : 'en';
=======
	const langCodeMatch = pathname.match(langPathRegex);
	return langCodeMatch ? langCodeMatch[1] : 'en';
>>>>>>> f504e447f718a9e93b04b204698361f67bef2abb
}
