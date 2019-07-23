var a = 'hello';
function aaa () {
    console.log(111);
}
// 先初始化，输入用户名和邮箱
// 先放入暂存区
// git add a.js
// 再放入git仓库中去
// git commit -m '成功提交'
// status可以看到当前文件的状态
// 未跟踪（Untracked files），表示还没有被 Git 管理过，既没有进入过暂存区，更没有进入过仓库区。
// 已暂存（staged），表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中
// 已提交（committed），表示数据已经安全的保存在本地数据库中。
// 已修改（modified），表示修改了暂存区的文件，但还没提交到仓库区。
// git add . 指的是把新建的和修改的全部添加到暂存区
// # 提交工作区自上次commit之后的变化，直接到仓库区
// # 注意：不包括未跟踪文件，至少进入过一次暂存区
// $ git commit -a -m "提交日志"
// # 最好用的是 gitk
// $ gitk
// # 显示有变更的文件
// $ git status
// # 显示当前分支的版本历史
// $ git log
// # 简略查看历史版本
// $ git log --oneline
// # 恢复暂存区的指定文件到工作区
// $ git checkout [file]
// # 恢复暂存区的所有文件到工作区
// $ git checkout .
// # 恢复某个commit的指定文件到暂存区和工作区
// $ git checkout [commit版本号] [file]
// # 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
// $ git reset [file]
// # 重置暂存区与工作区，与上一次commit保持一致
// $ git reset --hard

// 分支
// # 创建一个分支，名字叫做dev
// $ git branch dev
// # 切换分支命令；切换到dev分支上
// $ git checkout dev
// # 也可以使用下面的命令，代替上面两个命令；下面的命令表示创建并切换分支到dev上
// $ git checkout -b dev
