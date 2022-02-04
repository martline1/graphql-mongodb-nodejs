class Pair<A = number, B = A> {
	x: A;
	y: B;

	constructor(x: A, y: B) {
		this.x = x;
		this.y = y;
	}
}

export default Pair;
