

function delay_js(url){var type=url.split("."),file=type[type.length-1];if(file=="css"){var obj=document.createElement("link"),lnk="href",tp="text/css";obj.setAttribute("rel","stylesheet");}else var obj=document.createElement("script"),lnk="src",tp="text/javascript";obj.setAttribute(lnk,url);obj.setAttribute("type",tp);file=="css"?document.getElementsByTagName("head")[0].appendChild(obj):document.body.appendChild(obj);return obj;};
    function addload(func){var old=window.onload;if(typeof window.onload!="function"){window.onload=func;}else{window.onload=function(){old();func();}}};
    function loadjs(url,succ,v){var elem=delay_js(url);if((navigator.userAgent.indexOf('MSIE')==-1)?false:true){elem.onreadystatechange=function(){if(this.readyState&&this.readyState=="loading") return;else succ(v);};}else elem.onload=function(){succ(v);};elem.onerror=function(){};}
    var get$=function(e){ return document.getElementById(e)}
    function _getCookie(name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : null;
    }
    function _setCookie(name, value, expires, path, domain, secure) {
        var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + ( expires ? ';expires=' + exp.toGMTString() : '') + ( path ? ';path=' + path : '') + ( domain ? ';domain=' + domain : '') + ( secure ? ';secure' : '');
    }

    function getPid(){
        var _pu = "-n-";
        if(typeof(_pgvSCPId) !== "undefined"){
            _pu = _pgvSCPId;
        }else{
            var _p = window.location.pathname, _reg1 = /webplat\/info\/news_version/, _reg2 = /\/list_/;
            if(_reg1.test(_p) && _reg2.test(_p)){
                _pu = _p.split("/info/news_version3/")[1].split(".")[0];
            }else if(_reg1.test(_p) && !_reg2.test(_p)){
                _pu = "news"+_p.split("/").pop().split(".")[0];
            }else{
                _pu = _p.split(".")[0];
            }
        }
        return _pu;
    }

    function _ucookie(pid){
        if(typeof(pgvMain) !== 'function') return;

        var ckn_l = 'uhis', //新老用户cookie
                ckn_s = 'utrace',  //当前会话cookie
                ckv_s = _getCookie(ckn_s),
                cku,
                ckp = "";
        if(!ckv_l) ckv_l = _getCookie(ckn_l);//先根据pgv_pvid判断新老用户，再尝试uhis

        pid = pid==="-n-" ? 0 : pid;

        if(!ckv_s){
            if(!ckv_l){
                cku = "new";
            }else{
                cku = "old";
            }
            if(pid){
                ckp = "."+pid
            }
            _setCookie(ckn_l, 1, 525600);
            _setCookie(ckn_s, cku + ckp);
        }else{
            cku = ckv_s.split(".")[0];
            if(cku!=="new" && cku!=="old") cku = "old";
            if(pid){
                ckp = ckv_s.split(".")[1];
                if(typeof(ckp) === "undefined"){
                    ckp = "."+pid
                }else{
                    if(pid !== ckp.split(".")[0]){
                        ckp = pid + "." + ckp;
                        var ckpa = ckp.split(".");
                        if(ckpa.length>5){
                            ckp = ckpa.splice(0,5).join(".");
                        }
                    }
                    ckp = "." + ckp;
                }
                _setCookie(ckn_s, cku + ckp);
            }
        }
        if(typeof(_pgvSCCb) == 'function') _pgvSCCb(cku,ckp);
        pgvSendClick({hottag:'ucookie.'+cku+ckp});
    }

    function pings(){
        if(typeof(pgvMain) == 'function'){
            pgvMain();
            _ucookie(getPid());
        }
    }
    function handle(func){
        setTimeout(function(){
            var f=func.shift();
            f[0](f[1],f[2],f[3]);
            if(func.length>0){
                setTimeout(arguments.callee,300);
            };
        },200);
    };
    function addsize(func){
        var old=window.onresize;
        if(typeof window.onresize!="function"){
            window.onresize=func;
        }else{
            window.onresize=function(){
                old();func();
            }}};
    var rollLoad=function(obj){
        this.e=document.getElementById(obj.id);
        this.ff=obj.ff;
        this.topH=this.e.offsetTop;
        this.cliHeight=document.documentElement.clientHeight||document.body.clientHeight;
        this.applyFn=function(){
            var self=this;
            return function(){
                self.runFn(self);
            };}.apply(this);
        this.attach('scroll',this.applyFn);
        this.attach('resize',this.applyFn);
        this.attach('resize',function(){
            var self=this;
            return function(){
                self.cliHeight=document.documentElement.clientHeight||document.body.clientHeight;
            }}.apply(this));
        this.applyFn();
    };
rollLoad.prototype.runFn=function(obj){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop,
        top=scrollTop+obj.cliHeight;
    if(obj.topH<=top){
        obj.unattach("scroll",obj.applyFn);
        obj.unattach("resize",obj.applyFn);
        obj.ff();
    }};
if(window.attachEvent){
    rollLoad.prototype.attach=function(e,f){
        window.attachEvent("on"+e,f);
    };
    rollLoad.prototype.unattach=function(e,f){
        window.detachEvent("on"+e,f);
    }
}else{
    rollLoad.prototype.attach=function(e,f){
        window.addEventListener(e,f,false);
    };
    rollLoad.prototype.unattach=function(e,f){
        window.removeEventListener(e,f,false);}};

    //var ok=new rollLoad({id:'test',ff:alertST})
    function tab(e,l,cln){
        var tbs=document.getElementById(e).getElementsByTagName("a"),lys=new Array();
        for(var ia=1;ia<tbs.length+1;ia++){
            var lay=document.getElementById(l+ia),tb=tbs[ia-1];
            lys.push(lay);change(tb,lay);
        };
        function change(x,y){x.onmouseover=function(){
            if(y.style.display == "block") return;
            else{for(var ib=0;ib<lys.length;ib++){
                lys[ib].style.display="none"; tbs[ib].className =tbs[ib].className.replace(new RegExp("\\b"+cln+"\\b\\s*","g"),"");
            };
                x.className +=" "+cln;y.style.display="block";
            }};
        }}
    function tab2(e,l,cln){var tbs=document.getElementById(e).getElementsByTagName("a"),lys=new Array();
        for(var ia=1;ia<tbs.length+1;ia++){
            var lay=document.getElementById(l+ia),tb=tbs[ia-1];
            lys.push(lay);change(tb,lay);
        };
        function change(x,y){
            x.onclick=function(){
                if(y.style.display == "block") return;else{
                    for(var ib=0;ib<lys.length;ib++){
                        lys[ib].style.display="none"; tbs[ib].className =tbs[ib].className.replace(new RegExp("\\b"+cln+"\\b\\s*","g"),"");
                    };
                    x.className +=" "+cln;y.style.display="block";}};}}
    function tab3(e,l,cln){
        var tbs=document.getElementById(e).getElementsByTagName("a"),lys=new Array();
        for(var ia=1;ia<tbs.length;ia++){
            var lay=document.getElementById(l+ia),tb=tbs[ia-1];
            lys.push(lay);
            change(tb,lay);
        };
        function change(x,y){
            x.onmouseover=function(){
                if(y.style.display == "block") return;
                else{
                    for(var ib=0;ib<lys.length;ib++){
                        lys[ib].style.display="none";
                        tbs[ib].className =tbs[ib].className.replace(new RegExp("\\b"+cln+"\\b\\s*","g"),"");
                    };
                    x.className +=" "+cln;y.style.display="block";
                }};}}

    if(navigator.userAgent.indexOf("MSIE")>0) auIE=true;
    else auIE=false;
    function printBug(str,br)
    {
        if(br) document.getElementById('printBug').innerHTML+=str;
        else  document.getElementById('printBug').innerHTML=str;
    }

    //nav
    var nav=
    {
        box:document.getElementById('nav')
        ,top:document.getElementById('nav_t')
        ,bottom:document.getElementById('nav_sub')
        ,ts:document.getElementById('nav_t').getElementsByTagName('li')
        ,ds:document.getElementById('nav_sub').getElementsByTagName('ul')
    }

    nav.hover=function(ul,n)
    {
        ul.onmouseover=function()
        {
            for(var i=0;i<nav.ts.length;i++){nav.ts[i].className=nav.ts[i].className.replace(new RegExp("\\b"+"nav_active"+"\\b\\s*","g"),"");}
            nav.ts[n].className+=' nav_active';
        }
        ul.onmouseout=function(){nav.ts[n].className=nav.ts[n].className.replace(new RegExp("\\b"+"nav_active"+"\\b\\s*","g"),"");}
    }
    for(var i=0;i<nav.ds.length;i++){nav.hover(nav.ds[i],i)}

    function singleGG(obj)
    {
        this.info=obj.info;
        this.a=obj.a;
        this.pgv=obj.pgv;
        this.target=obj.target;
        this.inner();
    }
    singleGG.prototype.inner=function()
    {
        try{
            if(this.target) this.a.setAttribute('target','_blank');
            this.a.setAttribute('onclick','pgvSendClick({hottag:\''+this.pgv+'\'})');
            this.a.href=this.info[1];
            var img=document.createElement('img');
            img.src=''+this.info[2];
            this.a.innerHTML='';
            this.a.appendChild(img);
        }catch(e){}
    }
    function topServicerInfo()
    {
        try{
            loadjs('jd_dl/txt.js',function(){
                var topServicerInfoBox=document.getElementById('topServicerInfoBox');
                topServicerInfoBox.getElementsByTagName('em')[0].innerHTML=txtUrl[0];
                topServicerInfoBox.href=txtUrl[1];
            },'')
        }catch(e){}
    }

    function sideGG()
    {
        try{
            loadjs('js_dl/Info_new_3300.js',function(){
                var sideSgg=new singleGG({info:oDaTaNew3300['pos8989'],a:document.getElementById('sideGG'),pgv:'main.ads.yxb',target:false})
            },'')
        }catch(e){}
    }

    var ckv_l = _getCookie("pgv_pvid");//新老用户cookie
    function allneedload(){
        loadjs("",function (){loadjs('js_dl/ping_tcss_ied.js',pings,'');},"");topServicerInfo();sideGG();
    };
    addload(allneedload)
    var v = document.getElementById('user').innerHTML;
    if(v==null || v==""){document.getElementById('user').innerHTML="御龙在天运营团队"}
    function doZoom(size){
        document.getElementById('news_content').style.fontSize=size+'px'}
