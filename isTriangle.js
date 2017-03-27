function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);

  return a+b > c;
}
