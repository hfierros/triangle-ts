import express from 'express';
import typeService from '../services/type.service';
import { TriangleDto } from '../dto/triangle.dto';

class TypeMiddleware {
	async validateTriangleFields (
		req: express.Request,
		res: express.Response, 
		next: express.NextFunction
	) {
		if (req.body && req.body.sideA && req.body.sideB && req.body.sideC) {
			next(); 
		} else {
			res.status(400).send({error: `Missing required field`, 
			});
		}
	}

	async validTriangle(
		req: express.Request, 
		res: express.Response, 
		next: express.NextFunction
	) {
		const triangleDto : TriangleDto = req.body;
		if (triangleDto.sideA + triangleDto.sideB > triangleDto.sideC &&
			triangleDto.sideA + triangleDto.sideC > triangleDto.sideB &&
			triangleDto.sideB + triangleDto.sideC > triangleDto.sideA) {
				next();
			} else { 
				res.status(400).send({error: `Invalid triangle`});
			}
	}
}

export default new TypeMiddleware()
