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

function average( collection ) {
    return collection.reduce( function( acc, current ) {
        return acc + current;
    } ) / collection.length;
}

exports.average = average;
