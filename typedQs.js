var typedQs = {
  encode: function(query) {
    for (var key in query) {
      var val = query[key];
      if (val !== undefined && val === null || (val.constructor == String && val[0] == '!') || val.constructor == Number || val.constructor == Boolean)
        query[key] = '!' + val;
    }

    return query;
  },

  decode: function(query) {
    for (var key in query) {
      var val = query[key];
      if (val.slice(0, 2) == '!!')
        query[key] = val.slice(1);
      else if (val[0] == '!') {
        val = val.slice(1);
        if (val == 'true')
          val = true;
        else if (val == 'false')
          val = false;
        else if (val == 'null')
          val = null;
        else
          val = Number(val);
        query[key] = val;
      }
    }

    return query;
  }
};

// CommonJS
if (typeof module != 'undefined' && module.exports)
  module.exports = typedQs;
