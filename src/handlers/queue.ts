import { Composer } from 'telegraf';
import { getQueue } from '../tgcalls';

export const queueHandler = Composer.command('sira', ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const queue = getQueue(chat.id);
    const message =
        queue && queue.length > 0
            ? queue.map((url, index) => `${index + 1}. ${url}`).join('\n')
            : '🥱 Sırada bir şey yok?';

    ctx.reply(message);
});
