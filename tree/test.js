const searchKeyFunc = require('./index')
let tree = [{
    key: '111',
    title: '第一层',
    children: [
        {
            key: '222',
            title: '第二层',
            children: [{
                key: '333',
                title: '第三层',
                children: []
            },
            {
                key: '444',
                title: '第三层',
                children: []
            }]
        },
        {
            key: '555',
            title: '第二层',
            children: [
                {
                    key: '666',
                    title: '第三层',
                    children: []
                },
                {
                    key: '777',
                    title: '第三层',
                    children: [
                        {
                            key: '888',
                            title: '第三层',
                            children: []
                        },
                        {
                            key: '999',
                            title: '第三层',
                            children: []
                        }]

                }]
        }]
}];

let a = [];
//可传递参数；若不传递，则默认查询“666”
searchKeyFunc(tree, process.argv[2]||"666", [],function(data){
    a = data
})
console.log(a)