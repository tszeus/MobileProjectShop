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

}