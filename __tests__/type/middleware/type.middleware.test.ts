import {describe, expect, test} from '@jest/globals'
import { TriangleDto } from '../../../type/dto/triangle.dto';
import typeMiddleware from '../../../type/middleware/type.middleware';
import {getMockReq, getMockRes} from '@jest-mock/express';

describe("Test field validator", () => {
    test("Test valid fields", () => {
        const triangleDto: TriangleDto = {
            sideA: 1,
            sideB: 2,
            sideC: 3,
        };
        let req  =  getMockReq({body: triangleDto});

        let {res} = getMockRes({
            status: jest.fn().mockReturnThis(),
        });

        let next = jest.fn();
        typeMiddleware.validateTriangleFields(req, res, next);
        expect(next).toBeCalledTimes(1);
    
    })

    test("Test invalid fields", () => {
        let req  =  getMockReq({body: {}});

        let {res} = getMockRes({
            status: jest.fn().mockReturnThis(),
        });

        let next = jest.fn();
        typeMiddleware.validateTriangleFields(req, res, next);
        expect(res.status).toBeCalledWith(400);
        expect(res.send).toBeCalledWith({error: `Missing required field`});
    
    })
})

describe("Test valid triangle", () => {
    test("Test valid triangle", () => {
        const triangleDto: TriangleDto = {
            sideA: 2,
            sideB: 3,
            sideC: 4,
        };
        let req  =  getMockReq({body: triangleDto});

        let {res} = getMockRes({
            status: jest.fn().mockReturnThis(),
        });

        let next = jest.fn();
        typeMiddleware.validTriangle(req, res, next);
        expect(next).toBeCalledTimes(1);
    
    })

    test("Test invalid triangle", () => {
        const triangleDto: TriangleDto = {
            sideA: 1,
            sideB: 2,
            sideC: 4,
        };
        let req  =  getMockReq({body: triangleDto});

        let {res} = getMockRes({
            status: jest.fn().mockReturnThis(),
        });

        let next = jest.fn();
        typeMiddleware.validTriangle(req, res, next);
        expect(res.status).toBeCalledWith(400);
        expect(res.send).toBeCalledWith({error: `Invalid triangle`});
    
    })
})