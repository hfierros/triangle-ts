import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import TypeController from './controller/type.controller';
import TypeMiddleware from './middleware/type.middleware';

export class TypeRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, 'TypeRoutes');
	}

	configureRoutes() {
		this.app.route('/type')
			.post(
				TypeMiddleware.validateTriangleFields,
				TypeMiddleware.validTriangle,
				TypeController.getType
			);
		return this.app;
	}
}

