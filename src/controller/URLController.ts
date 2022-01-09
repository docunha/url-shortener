import { Request, response, Response } from "express"; 
import shortId from 'shortid';
import {config} from '../config/Constants'


export class URLController {
	/**
	 * shorten
	 */
	public async shorten(req: Request, response: Response): Promise<void> {
		const { originURL } = req.body

		const hash = shortId.generate()
		const shortURL = `${config.API_URL}/${hash}`

		response.json({ hash, shortURL, originURL })
	}
	/**
	 * redirect
	 */
	public async redirect(req: Request, response: Response): Promise<void> {
		const {hash} = req.params

		const url = {
			"hash": "Zk1Ud9iSD",
			"originURL": "https://github.com/docunha/Awesome-PS4-Jailbreak",
			"shortURL": "http://localhost:5000/Zk1Ud9iSD"
		}

		response.redirect(url.originURL)

		
	}
}