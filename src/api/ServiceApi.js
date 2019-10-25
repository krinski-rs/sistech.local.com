const apiKey = "34f399133d29cac046db5a4c23fa812d110fee87c82a005683d025f0c6763163";
const clientId = "c4e132397af0aac4cc1d4a59cabc3dc724c9217bcceccc4e031a9ae0d3c1a6da";

const encodeGetParams = p => 
  Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");


class ServiceApi {
    static searchService(parameters = null) {
        var url = 'http://sistech-api.local.com/service/';
        if(parameters){
            let params = encodeGetParams(parameters);
            url = url + '?' + params;
        }
        return fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(clientId + ":" + apiKey)
            }
        }).then((response) => {
            if (response.ok) {
                return {
                    ok: true,
                    services: response.json()
                };
            }
            return {
                ok: false,
                error: response.json()
            };
        }).then((data) => {
            return data;
        }).catch((error) => {
            return {
                ok: false,
                error: error.message
            }
        });
    }

    static createService(parameters) {
        var url = 'http://sistech-api.local.com/service/';
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(parameters),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(clientId + ":" + apiKey)
            }
        }).then((response) => {
            if (response.ok) {
                return {
                    ok: true,
                    service: response.json()
                };
            }
            return {
                ok: false,
                error: response.json()
            };
        }).then((data) => {
            return data;
        }).catch((error) => {
            return {
                ok: false,
                error: error.message
            }
        });
    }
}

export default ServiceApi;