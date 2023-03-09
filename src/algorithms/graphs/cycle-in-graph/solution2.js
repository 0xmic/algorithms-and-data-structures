const [WHITE, GREY, BLACK] = [0, 1, 2];

// O(v + e) Time | O(v) Space
// v = number of vertices
// e = number of edges
function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const colors = new Array(numberOfNodes).fill(WHITE);

    for (let node = 0; node < numberOfNodes; node++) {
        if (colors[node] != WHITE) continue;

        const containsCycle = traverseAndColorNodes(node, edges, colors);
        if (containsCycle) return true;
    }

    return false;
}

function traverseAndColorNodes(node, edges, colors) {
    colors[node] = GREY;

    const neighbors = edges[node];
    for (const neighbor of neighbors) {
        const neighborColor = colors[neighbor];

        if (neighborColor === GREY) return true;

        if (neighborColor === BLACK) continue;

        const containsCycle = traverseAndColorNodes(neighbor, edges, colors);
        if (containsCycle) return true;
    }

    colors[node] = BLACK;
    return false;
}

exports.cycleInGraph = cycleInGraph;
