export default {
    addQSParm(myUrl, name, value) {
        var re = new RegExp("([?&]" + name + "=)[^&]+", "");
        if (myUrl.indexOf("?") === -1) {
           myUrl = this.add("?");
        } else {
            if (re.test(myUrl)) {
                myUrl = this.change(myUrl);
            } else {
                myUrl = this.add("&");
            }
        }
        return myUrl;
    },
    add(myUrl, sep) {
       return myUrl += sep + name + "=" + encodeURIComponent(value);
    },
    change(myUrl) {
        return myUrl = myUrl.replace(re, "$1" + encodeURIComponent(value));
    }

}