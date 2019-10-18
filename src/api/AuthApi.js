const apiKey = "34f399133d29cac046db5a4c23fa812d110fee87c82a005683d025f0c6763163";
const clientId = "c4e132397af0aac4cc1d4a59cabc3dc724c9217bcceccc4e031a9ae0d3c1a6da";

class AuthApi {
    static login(username, password) {
        return fetch('http://sso.local.com/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
                {
                    grant_type: "password",
                    username: username,
                    password: password
                }
            ),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(clientId+":"+apiKey)
            }
        }).then((response) => {
	    	if(response.ok){
	    		return {
                    ok: true,
                    user: response.json()
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
                ok:false,
                error: error.message
            }
	    });
// .then((response) => {
// 	    	if(response.ok){
// 	    		return response.json();
// 	    	}
// 			return response.json();
// 	    }).then((data) => {
// 	    	return data;
// 	    }).catch((error) => {
// 	    	console.log("error");
//             console.log(error);
//             return error;
//         });
    }
}

export default AuthApi;