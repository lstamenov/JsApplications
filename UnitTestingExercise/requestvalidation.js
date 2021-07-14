let request = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

let validateRequest = (request) => {
    let method = request.method;
    if (!(method === 'GET' || method === 'POST'
    || method === 'DELETE' || method === 'CONNECT')){
        throw new Error('Invalid request header: Invalid method');
    }

    let uriValidator = new RegExp('[a-z\.]+[a-z]+');
    if (!uriValidator.test(request.uri)){
        throw new Error('Invalid request header: Invalid uri');
    }
    let version = request.version;
    if (version.startsWith('HTTP/')){
        if (!(version.endsWith('1.1') || version.endsWith('0.9') || version.endsWith('1.0')
        || version.endsWith('2.0'))){
            throw new Error('Invalid request header: Invalid version');
        }
    }else {
        throw new Error('Invalid request header: Invalid version');
    }

    let messageValidator = new RegExp('[^<>\\\\&\'"]+');
    if (!(messageValidator.test(request.message) || request.message === '')){
        throw new Error('Invalid request header: Invalid message');
    }

    return request;
}

console.log(validateRequest(request));
