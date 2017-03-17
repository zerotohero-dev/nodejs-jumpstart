'use strict';

/*       __   __   ___        __
 * |\ | /  \ |  \ |__      | /__`
 * | \| \__/ |__/ |___ .\__/ .__/
 *                  __   __  ___       __  ___
 *    | |  |  |\/| |__) /__`  |   /\  |__)  |
 * \__/ \__/  |  | |    .__/  |  /~~\ |  \  |
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const average = require('./math').average;

const items = [ 12, 44, 22, 13, 56, 5, 2, -12 ];

console.log( `Items: "${items}".`);
console.log( `Average: "${average(items)}".`);

