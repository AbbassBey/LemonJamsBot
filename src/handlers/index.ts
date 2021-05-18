import { bot } from '../bot';

import { playHandler } from './cal';
import { queueHandler } from './sira';
import { songHandler } from './bul';
import { pauseHandler } from './dur';
import { skipHandler } from './atla';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(songHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
};
