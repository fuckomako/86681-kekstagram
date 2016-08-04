function getMessage(a,b) {
if (typeof a === 'boolean') {
  if (a) {
    return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
  }
}else {
return "Переданное GIF-изображение не анимировано";
}

if (typeof a === 'number') {
return "Переданное SVG-изображение содержит " + a +" объектов и " + (b * 4)+ " атрибутов";
}

if (Array.isArray(a)) {
  var amountOfRedPoints = [];
  var amountPoints = 0;
  for (var i = 0; i < amountOfRedPoints.length; i++) {
    amountPoints += amountOfRedPoints[i];
  }
  return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
}

if (Array.isArray(a) && Array.isArray(b)) {
  var artifactsSquare = [];
  var amountSquare = 0;
  for (var i = 0; i < amountOfRedPoints.length; i++) {
    amountSquare *= artifactsSquare[i];
  }
  return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
}


};
