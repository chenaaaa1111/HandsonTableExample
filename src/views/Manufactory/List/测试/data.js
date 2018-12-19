//  文件data.js
export default [{
        title: '文件',
        icon: 'file',
        children: [{
                title: '打开文件',
                icon: 'open',
                command: 'openFile',
                children: [{
                    title: '打开最近使用的文件'
                }]
            },
            {
                title: '打开项目',
                icon: 'open',
                command: 'doIt'
            }
        ]
    },
    {
        title: '编辑',
        children: [{
                title: '剪切'
            },
            {
                title: '复制'
            },
            {
                title: '粘贴'
            }
        ]
    }
]