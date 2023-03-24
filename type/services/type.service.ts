import { TriangleDto } from '../dto/triangle.dto'

class TypeService {
	async getTriangleType(triangle: TriangleDto) {
		if (triangle.sideA == triangle.sideB && 
			triangle.sideA == triangle.sideC &&
			triangle.sideC == triangle.sideB) {
			return "EQUILATERAL";
		}
		if (triangle.sideA != triangle.sideB && 
			triangle.sideA != triangle.sideC &&
			triangle.sideB != triangle.sideC) {
			return "SCALENE";
		}
		return "ISOSCELES";
	}
}

export default new TypeService(); 
