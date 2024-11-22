// import {log} from './logger'
// import msg from './message'
// import {a,file} from './assets/test.json'
// import { cloneDeep } from 'lodash-es';
// import cjsModule from './cjs-module';
// log(msg);
// console.log(a,file);
// const c = cloneDeep(a)
// log(c)
// log(cjsModule.foor)

import('./logger').then(({log})=>{
    log(88888);
})