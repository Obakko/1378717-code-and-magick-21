'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const GAP_WIDTH = 50;
const TEXT_HEIGHT = 16;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_X = CLOUD_X + 40;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (times) => {
  let maxElement = times[0];
  for (let i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, `rgba(0, 0, 0, 0.7)`);

  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `bold 16px PT Mono`;
  ctx.fillStyle = `black`;
  ctx.textBaseline = `hanging`;

  ctx.fillText(`Ура вы победили!`, CLOUD_X + 2 * GAP, CLOUD_Y + GAP);

  ctx.fillText(`Список результатов:`, CLOUD_X + 2 * GAP, CLOUD_Y + TEXT_HEIGHT + GAP);

  for (let i = 0; i < names.length; i++) {
    const BAR_HEIGHT_X = (BAR_HEIGHT * times[i].toFixed(0)) / getMaxElement(times);

    let shade = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsla(237, 98%, 35%, ${String(Math.random() + 0.1)})`;

    ctx.fillText(times[i].toFixed(0), BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 2 * TEXT_HEIGHT + GAP + BAR_HEIGHT - BAR_HEIGHT_X);
    ctx.fillStyle = shade;
    ctx.fillRect(BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + GAP + BAR_HEIGHT - BAR_HEIGHT_X, BAR_WIDTH, BAR_HEIGHT_X);
    ctx.fillStyle = `black`;
    ctx.fillText(names[i], BAR_X + i * (GAP_WIDTH + BAR_WIDTH), CLOUD_Y + 3 * TEXT_HEIGHT + 2 * GAP + BAR_HEIGHT);
  }
};
