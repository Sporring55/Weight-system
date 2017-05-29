function jsonSorter(objArr) {
    var newObjArr = [];
    var obj;
    var objKeys;
    objArr.sort(sortJsonDate);

    if ((!objKeys) || objKeys.length == 0) {
        objKeys = Object.keys(objArr[0]);
        // console.log(objKeys);
    }

    for (var i = 0; i < objArr.length; i++) {
        obj = objArr[i];
        var curVal = objArr[i]["Lokation"];
        var curValD = objArr[i]["Dato"];
        newObjArr.push(obj);
        for (var j = 0; j < newObjArr.length; j++) {
            var hist = "Historik";
            var newVal = newObjArr[j]["Lokation"];
            var newValD = newObjArr[j]["Dato"];
            if (!(newObjArr[j].hasOwnProperty(hist))){
                newObjArr[j][hist] = [];
            }
            if (newVal === curVal && newValD !== curValD) {
                newObjArr[j][hist].push(objArr[i]);
                newObjArr.pop();
            }
            else if (newObjArr[j][hist].length === 0) {
                delete newObjArr[j][hist];
            }
        }
    }
    newObjArr = newObjArr.sort(sortJsonLok);
    return newObjArr;
    // console.log(newObjArr);
};

function sortJsonDate(a, b) {
	a = new Date(a.Dato);
	b = new Date(b.Dato);
	return a > b ? -1 : a < b ? 1 : 0;
};

function sortJsonLok(a, b) {
	a = a.Lokation;
	b = b.Lokation;
	return a < b ? -1 : a > b ? 1 : 0;
};