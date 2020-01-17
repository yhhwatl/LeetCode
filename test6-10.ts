
function convert(s,numRows) {
    let ret = "";
    let crows = numRows-1;
    let arr = [];
    let tidx = 0;
    
    for (let i = 0; tidx <= s.length-1; i++) {
        let type = i % (crows);
        if(type == 0) {
            for (let j = 0; j < numRows; j++) {
                if(!arr[j])arr[j] = [];
                arr[j][i] = s[tidx++];
            }
        } else {
            for (let k = 1; k < numRows; k++) {
                if(type == k) {
                    arr[crows-k][i] = s[tidx++];
                }
            }
        } 
    }
    for (let i = 0; i < arr.length; i++) {
        const tarr = arr[i];
        for (let j = 0; j < tarr.length; j++) {
            const ele = tarr[j];
            if(ele) {
                ret+= ele;
            }
        }
    }
    return ret;
}
// let ret = convert("LEETCODEISHIRING",3);
// console.log("convert ret=> ",ret);

// 10
// function rep(p:string,idx:number) {
//     let repstr = "";

//     return repstr;
// }
// function isMatch(s:string,p:string) {
//     let repstr = "";
//     while (true) {
//         repstr = "";
//         if(s.indexOf(repstr)<0)
//             break;
//     }
// }

// function step() {
//     for(let i=0;i<=10;i++) {
//         for(let j=0;j<=5;j++) {
//             if(i+2*j == 10) {
//                 console.log("ret result=> ",i,j);    
//             }
//         }
//     }
// }
// step();

function findQueue() {
    let hang = 8;
    let lie = 8;
    let que_num = 8;
    let ret = [];//[0] = [{0,0},{1,3},...]
    for(let t=0;t<hang;t++)
        for(let j=t;;) {
            let path = [];
            for(let i=0;;) {
                if(path.length == 0)
                    path.push([j++,i]);
                let tmpj = j;
                if(j>=hang){
                    tmpj = j-hang;
                }
                let tmpi=i;
                if(i>=lie){
                    tmpi = i-lie;
                }
                if(check(tmpj,tmpi,path)) {
                    path.push([tmpj,tmpi]);
                    j++;
                    if(j>=2*hang)
                        break;
                }else {
                    i++;
                }
                if(i>=2*lie)
                    break;   
            }
            if(j>=2*hang)
                break;
            if(path.length == que_num)
                ret.push(path)
            // console.log(path);
        }
    return ret;
}
function findNextLie(l,que_num) {
    return l+1;
}
function check(h,l,path) {
    let ret = true;
    path.some((pos,i,a)=>{
        if(pos[0]==h || pos[1] == l) {
            ret = false;
            return true;
        }
        if(pos[0]==h+1 && pos[1]==l+1) {
            ret = false;return true;
        }
        if(pos[0]==h-1 && pos[1]==l-1) {
            ret = false;return true;
        }
        return false;
    });
    return ret;
}
let ret = findQueue();
console.log(ret);