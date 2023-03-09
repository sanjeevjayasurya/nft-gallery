export const generateImageUrl = (url = "none://none") => {
    let src = null;
    if (url) {
      try {
        if (typeof url !== "string") {
          url = url.toString();
        }
        if (url.startsWith("data:")) {
          return url;
        }
        const originUrl = url.split("//");
        if (originUrl?.length === 2) {
          switch (originUrl[0].toLowerCase()) {
            case "http:":
              src = url;
              break;
            case "https:":
              src = url;
              break;
            case "ipfs:":
              src = "https://ipfs.io/" + originUrl[1];
              break;
            default:
              src = "/images/error.jpeg";
              break;
          }
        } else {
          src = "https://ipfs.io/" + url;
        }
      } catch (err) {
        console.error(err.message, "Render Url:", url);
        src = "/images/error.jpeg";
      }
    }
    return src;
  };