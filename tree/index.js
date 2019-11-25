/**
 * 通过所选key值来获取所有父类的key值
*/

//map循环，
function searchKeyFunc(tree, searchKey, oriArray, callback) {
    try {
        tree.map((value) => {
            let resultA = [];
            if (value.key == searchKey) {
                resultA = [...oriArray, value.key];
                throw (resultA);
            } else {
                if (value.children.length) {
                    resultA = [...oriArray, value.key];
                    searchKeyFunc(value.children, searchKey, resultA, callback);
                }
            }
        })
    } catch (e) {
        callback(e)
    }
}

module.exports = searchKeyFunc;