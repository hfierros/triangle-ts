import express from 'express';
import typeService from '../services/type.service';

class TypeController {
	async getType(req: express.Request, res: express.Response) {
		const typeCalc = await typeService.getTriangleType(req.body);
		res.status(200).send({type: typeCalc});
	}
}

export default new TypeController();
