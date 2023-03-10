// O(n) Time | O(n) Space
// n = length of input array
function sunsetViews(buildings, direction) {
    const buildingsWithSunsetViews = [];

    const startIdx = direction === 'WEST' ? 0 : buildings.length - 1;
    const step = direction === 'WEST' ? 1 : -1;

    let idx = startIdx;
    let runningMaxHeight = 0;
    while (idx >= 0 && idx < buildings.length) {
        const buildingHeight = buildings[idx];

        if (buildingHeight > runningMaxHeight) buildingsWithSunsetViews.push(idx);

        runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);

        idx = idx + step;
    }

    if (direction === 'EAST') buildingsWithSunsetViews.reverse();

    return buildingsWithSunsetViews;
}

exports.sunsetViews = sunsetViews;
