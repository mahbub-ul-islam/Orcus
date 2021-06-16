
const router = {
    baseUrl: "http://127.0.0.1:5500/theme/Orcus_dashboard/",
    backend: "",
    partials: {
        main: "/template/dashboard/main.html",
        rtl: "/template/dashboard/rtl.html",
    },
    api: {

    },
}


let controller = (_url, _method, _data, _container="body", _clearContainer=true) => {
    if (_container [0] != "#") {
        _container = "#" + _container;
    }

    $.ajax({
        url: _url,
        method: _method,
        data: _data,
        success: (res) => {
            if (_clearContainer) {
                $(_container).empty();
            }
            $(_container).append(res);
        },
        error: (res) => {
            console.error(res)
        }
    })
}

