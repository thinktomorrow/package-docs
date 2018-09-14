module.exports = {
    prefix: function(prefix, children) {
        return children.map(function(child){
            if(child.constructor == Array){
                return [ `${prefix}/${child[0]}`,  child[1]];
            }else{
                return `${prefix}/${child}`;
            }
        });
  }
}