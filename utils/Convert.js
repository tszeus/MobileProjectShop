export const Convert = {
    /**
     * Convert object to query string
     * @param {*} obj obj query
     * @returns query string
     * @author: PVTRONG (17/4/2022)
     */
    objectToQueryString(obj) {
		var str = [];
		for (var p in obj)
			if (obj.hasOwnProperty(p) && obj[p] !== null) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		return str.join("&");
	},

    async saveFieldProfile(fieldName, value){
        try {
            // TODO lấy userId từ redux để bind động vào
			var res = await axios.get(`${Config.BaseUrl}/user/62640118bff0c1f05f6ea5de`, {
                fieldName: value
            });
            // TODO Cập nhật vào secure storage
		} catch (err) {
			console.log(err);
		}
    }

}