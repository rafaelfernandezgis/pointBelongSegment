function isPointBelongSegment(Lx1, Ly1, Lx2, Ly2, Px, Py) {
    var ab = Math.sqrt(Math.pow((Lx2 - Lx1), 2) + Math.pow((Ly2 - Ly1), 2));
    var ac = Math.sqrt(Math.pow((Lx1 - Px), 2) + Math.pow((Ly1 - Py), 2));
    var bc = Math.sqrt(Math.pow((Lx2 - Px), 2) + Math.pow((Ly2 - Py), 2));


    if ((ac + bc - ab) < Math.abs(0.1))return true;
}
