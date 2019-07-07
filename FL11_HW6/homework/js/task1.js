                let point1 = prompt('enter didgit point1');
                let point12 = prompt('enter didgit point12');
                let point2 = prompt('enter didgit point2');
                let point22 = prompt('enter didgit point22');
                let point3 = prompt('enter midpoint point3');
                let point32 = prompt('enter midpoint point32');

                let separetePoint, a, b, c, result, k=2;
                if (point1 === point12 && point2 === point22 && point3 === point32) {
                  a = parseInt(point1, 10);
                  b = parseInt(point2, 10);
                  c = parseInt(point3, 10);
                  separetePoint = (a + b)/k;
                  result = separetePoint === c ? 'true' : 'false';
                 console.log(result);
                } else {
                  console.log('false');
                }
                
