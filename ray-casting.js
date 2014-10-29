/*
 * 射线穿越法（奇偶法）
 * http://en.wikipedia.org/wiki/Even-odd_rule
 */
function rayCasting(p, poly) {
  var px = p.x,
      py = p.y,
      flag = false
  for(var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    var sx = poly[i].x,
        sy = poly[i].y,
        tx = poly[j].x,
        ty = poly[j].y
    // 点与多边形顶点重合
    if((sx === px && sy === py) || (tx === px && ty === py)) {
      return 'on'
    }
    // 线段两端点在射线两侧
    if((sy < py && ty >= py) || (sy >= py && ty < py)) {
      var x = sx + (py - sy) * (tx - sx) / (ty - sy)
      // 点在多边形的边上
      if(x === px) {
        return 'on'
      }
      // 射线穿过多边形的边界
      if(x > px) {
        flag = !flag
      }
    }
  }
  // 射线穿过多边形边界的次数为奇数时点在多边形内
  return flag ? 'in' : 'out'
}