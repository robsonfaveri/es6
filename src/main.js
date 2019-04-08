var getPixels = require("get-image-pixels");

getPixels('/images/avenger.jpg', function(err, info) {

    var height = info.height;
    var width = info.width;
    var data = info.data;
    //
    // for (var i = 0, l = data.length; i < l; i += 4) {
    //     var red = data[i]
    //     var green = data[i + 1]
    //     var blue = data[i + 2]
    //     var alpha = data[i + 3]
    // }
});








// import axios from 'axios';
//
// class Api {
//     static async getUserInfo(username){
//
//         try {
//
//             const response  = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         }catch (err) {
//             console.warn('Erro na api')
//         }
//
//     }
// }
//
//
// Api.getUserInfo('diego3g');