// 全局变量文件
import {sdk} from "./lib/global"

// 引入需要执行的文件
import {test} from "./lib/test"

window.JCSP = sdk;

// 开放函数调用
sdk.test = test
