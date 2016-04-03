'use strict';

function average( collection ) {
    return collection.reduce( function( acc, current ) {
        return acc + current;
    } ) / collection.length;
}

exports.average = average;
