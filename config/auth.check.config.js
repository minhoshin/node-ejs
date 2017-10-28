exports.permissionUserAuth = function(req, res, next){

    // session 체크 페이지의 캐시값을 모두 삭제하여 뒤로 가기를 막는 기능.
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    // 세션 값이 있을 경우
    if(req.session.permissionUser){
        return next();
    // 세션 값이 없을 경우
    }else{
        res.redirect('/sign/signin');
    }

};

exports.allowUserAuth = function(req, res, next){

    // 세션 값이 있을 경우
    if(req.session.allowUser){
        return next();
    // 세션 값이 없을 경우
    }else{
        res.redirect('/sign/signin');
    }

};