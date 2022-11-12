/**
 * @param {string} url      url to be fetched.
 * @param {object} options  object to be passed to fetch() funciton (if any).
 * @return {object}         object with details and return value (if any).
 */
 async function __rpg(url,opt={}) {
    let ret = {meta:{ok:false,conn:false,msg:"",code:0},data:{isJsn:false,isTxt:false,rData:{}}};
    let response;
    try {
        response = await fetch(url,opt);
    } catch (error) {
        console.log(error);
        ret.meta.msg = "could not complete request, please check your nework connection or request url";
        return ret;
    }
    ret.data.rData = await response.text();
    ret.meta.conn = true;
    ret.meta.code = response.status;
    ret.meta.ok = response.ok;
    try {
        ret.data.rData = JSON.parse(ret.data.rData);
        ret.data.isJsn = true;
    } catch(err) {
        ret.data.isTxt = true;
        console.log(ret.data.rData);
    }
    return ret;
}