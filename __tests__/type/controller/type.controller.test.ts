import {jest, test, expect} from '@jest/globals';
import {getMockReq, getMockRes} from '@jest-mock/express'
import typeService from '../../../type/services/type.service'
import typeController from '../../../type/controller/type.controller';

jest.mock('../../../type/services/type.service')


test('Test controller', async ()=> {
        const req = getMockReq({body: {
                sideA: 1,
                sideB: 2,
                sideC: 3
            }
        });
    
        
        const {res}  = getMockRes();
    
        jest.mocked(typeService.getTriangleType).mockResolvedValue('SCALENE');
    
        await typeController.getType(req, res);
        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.send).toHaveBeenCalledWith(
            {
                type: 'SCALENE'
            }
        )
    
});
