const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ], //a
			[ 4, 0, 8, 0, 0, 0, 0, 11, 0 ], //b
			[ 0, 8, 0, 7, 0, 4, 0, 0, 2 ], //c
			[ 0, 0, 7, 0, 9, 14, 0, 0, 0], //d
			[ 0, 0, 0, 9, 0, 10, 0, 0, 0 ], //e
			[ 0, 0, 4, 14, 10, 0, 2, 0, 0], //f
			[ 0, 0, 0, 0, 0, 2, 0, 1, 6 ], //g
			[ 8, 11, 0, 0, 0, 0, 1, 0, 7 ], //h
			[ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]]; //i

assert(JSON.stringify(dijkstra(graph, 0)) === JSON.stringify([[0, 0], [4, 1], [12, 2], [19, 3], [21, 4], [11, 5], [9, 6], [8, 7], [14, 8]]));
assert(JSON.stringify(dijkstra(graph, 1)) === JSON.stringify([[4, 0], [0, 1], [8, 2], [15, 3], [22, 4], [12, 5], [12, 6], [11, 7], [10, 8]]));
assert(JSON.stringify(dijkstra(graph, 2)) === JSON.stringify([[12, 0], [8, 1], [0, 2], [7, 3], [14, 4], [4, 5], [6, 6], [7, 7], [2, 8]]));
assert(JSON.stringify(dijkstra(graph, 3)) === JSON.stringify([[19, 0], [15, 1], [7, 2], [0, 3], [9, 4], [11, 5], [13, 6], [14, 7], [9, 8]]));
assert(JSON.stringify(dijkstra(graph, 4)) === JSON.stringify([[21, 0], [22, 1], [14, 2], [9, 3], [0, 4], [10, 5], [12, 6], [13, 7], [16, 8]]));
assert(JSON.stringify(dijkstra(graph, 5)) === JSON.stringify([[11, 0], [12, 1], [4, 2], [11, 3], [10, 4], [0, 5], [2, 6], [3, 7], [6, 8]]));
assert(JSON.stringify(dijkstra(graph, 6)) === JSON.stringify([[9, 0], [12, 1], [6, 2], [13, 3], [12, 4], [2, 5], [0, 6], [1, 7], [6, 8]]));
assert(JSON.stringify(dijkstra(graph, 7)) === JSON.stringify([[8, 0], [11, 1], [7, 2], [14, 3], [13, 4], [3, 5], [1, 6], [0, 7], [7, 8]]));
assert(JSON.stringify(dijkstra(graph, 8)) === JSON.stringify([[14, 0], [10, 1], [2, 2], [9, 3], [16, 4], [6, 5], [6, 6], [7, 7], [0, 8]]));