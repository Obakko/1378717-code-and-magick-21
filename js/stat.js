'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var GAP_WIDTH = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_X = CLOUD_X + 40;

var times = [`3752`, `4312`, `2252`, `1252`];
var names = [`Вы`, `Кекс`, `Катя`, `Игорь`];
var shade = [`rgba(255, 0, 0, 1)`, `hsla(246, 96%, 27%, 1)`, `hsla(246, 96%, 27%, 0.7)`, `hsla(246, 96%, 27%, 0.5)`, `hsla(246, 96%, 27%, 0.3)`];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, `rgba(0, 0, 0, 0.7)`);

  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `bold 16px PT Mono`;
  ctx.fillStyle = `black`;
  ctx.textBaseline = `hanging`;

  ctx.fillText(`Ура вы победили!`, CLOUD_X + 2 * GAP, CLOUD_Y + GAP);

  ctx.fillText(`Список результатов:`, CLOUD_X + 2 * GAP, CLOUD_Y + TEXT_HEIGHT + GAP);

  for (var i = 0; i < names.length; i++) {
    var BAR_HEIGHT_X = (BAR_HEIGHT * times[i]) / getMaxElement(times);

    ctx.fillText(times[i], BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP);
    ctx.fillStyle = shade[i];
    ctx.fillRect(BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + GAP + BAR_HEIGHT - BAR_HEIGHT_X, BAR_WIDTH, BAR_HEIGHT_X);
    ctx.fillStyle = `black`;
    ctx.fillText(names[i], BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);
  }
};
/*
  ctx.fillText('times', BAR_X + 0 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(BAR_X + 0 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + GAP, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillText('Вы', BAR_X + 0 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);

  ctx.fillText('times',BAR_X + 1 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP);
  ctx.fillStyle = 'hsl(237, 100%, 18%, 1)'
  ctx.fillRect(BAR_X + 1 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + GAP, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillText('Кекс', BAR_X + 1 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);

  ctx.fillText('times', BAR_X + 2 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP);
  ctx.fillStyle = 'hsl(237, 100%, 18%, 0.4)'
  ctx.fillRect(BAR_X + 2 * GAP_WIDTH + 2 * BAR_WIDTH, CLOUD_Y + 3 * TEXT_HEIGHT + GAP, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillText('Катя', BAR_X + 2 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);

  ctx.fillText('times',BAR_X + 3 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP);
  ctx.fillStyle = 'hsl(237, 100%, 18%, 0.8)';
  ctx.fillRect(BAR_X + 3 * GAP_WIDTH + 3 * BAR_WIDTH, CLOUD_Y + 3 * TEXT_HEIGHT + GAP, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillText('Игорь', BAR_X + 3 * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);
};

*/
